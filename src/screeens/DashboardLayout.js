import React, {useRef} from 'react'
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RBSheet from "react-native-raw-bottom-sheet";
import {Text} from "react-native-web";

const MenuItem = ({icon, title, onPress}) => {
    return (
        <TouchableOpacity>

        </TouchableOpacity>
    )
}

const DashboardLayout = (props) => {

    const menuRef = useRef(null);
    const {
        children
    } = props;

    return(
        <View style={styles.root}>
            <MapView style={styles.mapStyle} />
            <Image source={imgTopBar} style={styles.topBarImage}/>
            <TouchableOpacity style={styles.menuButton} onPress={() => menuRef.open()}>
                <Feather name="menu" size={24} color='#555555'/>
            </TouchableOpacity>
            <View style={styles.content}  pointerEvents="box-none">
                {children}
            </View>
            <RBSheet
                ref={menuRef}
                height={hp('100%') - 90}
                openDuration={250}
                customStyles={{
                    container: {
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }}
            >
                <View>
                    <Text>Setting</Text>
                    <MaterialIcons name="close" size={20} color="#555555"/>
                </View>
            </RBSheet>
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
        zIndex: 1,
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