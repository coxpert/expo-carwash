import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import MapView from 'react-native-maps';
import {imgTopBar} from "../constants";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';

const DashboardLayout = (props) => {

    const {
        children
    } = props;

    return(
        <View style={styles.root}>
            <MapView style={styles.mapStyle} />
            <Image source={imgTopBar} style={styles.topBarImage}/>
            <TouchableOpacity style={styles.menuButton}>
                <Feather name="menu" size={24} color='#555555'/>
            </TouchableOpacity>
            <View style={styles.content}  pointerEvents="none">
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        position: 'relative',
        flex:1,
        width:'100%',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    mapStyle:{
        width: wp('100%'),
        height: hp('100%'),
    },
    content:{
        flex: 1,
        width: wp('100%'),
        height: hp('100%') - 80,
        position:'absolute',
        left: 0,
        top: 80,
    },
    topBarImage:{
        position:'absolute',
        top:0,
        left: 0,
        width: '100%',
        height: 80,
        resizeMode:'stretch'
    },
    menuButton:{
        position:'absolute',
        top: 53,
        left: 20,
        zIndex: 1000,
    }
})

export default DashboardLayout;