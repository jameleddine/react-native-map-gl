import React, {StyleSheet} from 'react-native'
import reactCSS from 'reactcss'

// export const styles = StyleSheet.create({
export const styles = reactCSS({
  tooltip :{
    minWidth:'200px',
    maxWidth:'300px',
    padding:0,
    color:'black',
    backgroundColor:'white',
    fontWeight:'normal',
    fontSize:11,
    borderRadius:8,
    position:'absolute',
    zIndex:99999999,
  },
  btn:{
    backgroundColor: '#ffca00',
    color: 'white',
    // border: none
  },
  floor:{
    color:'white',
    "hover":{
      btn:{
        backgroundColor: '#ffca00 !important',
        color: 'white',
        // border: none
      }
      
    }
    
  },
  floor  :{
    'active':{
      backgroundColor: '#ffca00',
      color: 'white',
      // border: none
    }
  },
  buttonPress: {
    borderColor: "#000066",
    backgroundColor: '#ffca00',
    borderWidth: 1,
    borderRadius: 20,
    width:'100px'
}
});
