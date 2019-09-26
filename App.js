/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MapboxGL from '@react-native-mapbox-gl/maps';
import indoorMapGeoJSON from './indoor_3d_map.json';

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
export default class App extends Component {
render(){


  return (
    <View  style={{flex: 1}}>
          <MapboxGL.MapView
          ref={(c) => this._map = c}
          style={{flex: 1}}>
            <MapboxGL.Camera
            zoomLevel={16}
            pitch={40}
            heading={20}
            centerCoordinate={[6.136737577322208, 49.60412210489483]}
          />
            <MapboxGL.ShapeSource
            id="indoorBuildingSource"
            shape={indoorMapGeoJSON}
          >
            <MapboxGL.FillExtrusionLayer
              id="building3d"
              // style={layerStyles.building}
            />
            <MapboxGL.FillExtrusionLayer
              id="building3d"
              style={layerStyles.building}
            />
          </MapboxGL.ShapeSource>
        </MapboxGL.MapView>
        <Text>Hello</Text>
      </View>
  );
};
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

// export default App;
