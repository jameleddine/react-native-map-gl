/* eslint-disable */
import React from 'react';
import { View, Text, Button} from 'react-native';
import { styles } from "./../assets/style";

import MapboxGL from '@react-native-mapbox-gl/maps';
import indoorMapGeoJSON from './../../indoor_3d_map.json';
import Bubble from './common/Bubble';

const { EnvironmentReportMCF88 } = require("../backend/x-cite.io/protos/environment/mcf88_pb.js");
const { EnvironmentReport } = require("../backend/x-cite.io/protos/environment/basic_pb.js");

import { SensorService } from "./../backend/sensor";

MapboxGL.setAccessToken('pk.eyJ1IjoidWxmdGhlb2JhbGQiLCJhIjoiY2swZWc0ems2MGFyaTNjbDl0MzB0amJscyJ9.JnnfCNGRks-wMEqIYVlH_Q');

const layerStyles = {
    building: {
        fillExtrusionOpacity: 0.5,
        fillExtrusionHeight: ['get', 'height'],
        fillExtrusionBase: ['get', 'base_height'],
        fillExtrusionColor: ['get', 'color'],
        // fillExtrusionColorTransition: {duration: 2000, delay: 0},
    },
};


class MapBox extends React.Component {
    state = {
        markers: [],
        changeState: 0,
        station: {},
        isOpen: false,
        hoveredArea: null, msg: null, moveMsg: null, floor: 0, x: 0, y: 0,
        floor: 0,
        reportData:[]
    }
    constructor() {
        super()
    }
    componentWillMount() {
        this.sensorService = new SensorService();
    }
    componentDidMount() {
        this.getMarkers()
    }
    getMarkers = async () => {
        var result = {};
        this.sensorService.getListReportsService([], async (status) => {

            // if (status.code !== StatusCode.OK) {
            //     if (status.code == 16) {
            //     }
            //     else {
            //     }
            // }
        }, async (data) => {
            console.log("it's working here : 1", data.toObject())

            var list = data.toObject().reportsList
            var tab = await Promise.all(list.map(async (report, index) => {
                if (report.reportType == 2){
                    console.log("EnvironmentReportMCF88 working here :", EnvironmentReportMCF88.deserializeBinary(report.reportData.value).toObject())
                    result = EnvironmentReportMCF88.deserializeBinary(report.reportData.value).toObject();
                }

                if (report.reportType == 1){
                    console.log("EnvironmentReport working here :", EnvironmentReport.deserializeBinary(report.reportData.value).toObject())
                    result = EnvironmentReport.deserializeBinary(report.reportData.value).toObject();
                }
                return result             
            }));
            this.setState({reportData:[Object.assign({},tab[0],tab[1])]});
        });
    }
    onSourceLayerPress = async (e)=> {
        const feature = e.nativeEvent.payload;
        await this.setState({ isOpen: true })
        await this.setState({ station: feature.properties })
       
        console.log('You pressed a layer here is your feature', feature.properties); // eslint-disable-line
      }

    
    closePopup = () => {
        this.setState({ isOpen: false })
    }

    changeFloor = async (floorNumber) => {
        console.log(floorNumber)
        this.setState({ isOpen: false })
        this.setState({ floor: floorNumber })
    }


    render() {
        
        const { floor, isOpen, station, hoveredArea, reportData } = this.state
        return (

            <View style={{ flex: 1 }}>
                <View className="floor">
                    <Button title="1.Floor" style={styles.buttonPress} variant="outlined" style={styles.btn} onPress={() => this.changeFloor(0)} className={ (floor == 0 ? styles.active : styles.btn)}>

                    </Button>
                    <Button title="2.Floor" variant="outlined" style={styles.btn} onPress={() => this.changeFloor(1)} className={(floor == 1 ? styles.active : styles.btn)}>
                    </Button>
                </View>
                <MapboxGL.MapView
                    ref={(c) => this._map = c}
                    style={{ flex: 1 }}>
                    <MapboxGL.Camera
                        zoomLevel={18}
                        pitch={0}
                        heading={0}
                        centerCoordinate={[6.136737577322208, 49.60412210489483]}
                    />
                    <MapboxGL.ShapeSource
                        id="indoorBuildingSource"
                        hitbox={{width: 20, height: 20}}
                        shape={indoorMapGeoJSON.floor[floor]}
                        onPress={this.onSourceLayerPress}
                        style={layerStyles.symbolLayout}

                    >

                        <MapboxGL.FillExtrusionLayer
                            id="building3d"
                            style={layerStyles.building}
                        />
                        <MapboxGL.SymbolLayer key='{id}' id='{id}' style={{textField:"{name}", textColor: '#000',textAllowOverlap: false }}/>
                    </MapboxGL.ShapeSource>
                </MapboxGL.MapView>

                {isOpen &&
                reportData.map((report, index) => {
                    if (report.thingId.uuid == station.id) {
                        console.log(station.name)
                        return(
                            <View className={styles.tooltip} key={index}>
                                <View >
        
                                    <Text>{station.name}</Text>
                                    <Text >{report.currentTemperature}</Text>
                                    <Text >{report.humidity}</Text>
                                    <Text >{report.batteryPercentage}</Text>
                                    <Text >{report.co2}</Text>
                                    <Text >{report.lux}</Text>
        
                                </View>
        
                            </View>)
                    }
                    else{
                        return(
                            <View className={styles.tooltip} key={index}>
                                <View >
                                    <Text>Static Data:</Text>
                                    <Text>{station.name}</Text>
                                    <Text >24 Celsius</Text>
                                    <Text >40 %</Text>
                                    <Text >95 VOC</Text>
                                    <Text >541 PPM</Text>
                                    <Text >216 LUX</Text>
        
                                </View>
        
                            </View>)
                    }
                    
                })
            }
                  {/* <Bubble>
                <Text>Tap to add an icon</Text>
              </Bubble> */}
            </View>

        )
    }
}


export default MapBox

