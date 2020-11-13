import React, {useRef} from 'react'
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text
} from "react-native";
import MapView from 'react-native-maps';
import {
    iconChart,
    iconDate,
    iconArrowNext,
    iconManageCard,
    iconMarkFill,
    iconMenuCar,
    iconProfile,
    imgTopBar
} from "../constants";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RBSheet from "react-native-raw-bottom-sheet";
import {Paper} from "../components";
import {useFirestoreConnect} from "react-redux-firebase";

const MenuItem = ({icon, title, onPress}) => {
    return (
        <Paper onPress={onPress} style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between', paddingVertical: 15,}}>
            <View style={{alignItems:'center', flexDirection: 'row'}}>
                <Image source={icon} style={{marginRight: 10,}}/>
                <Text>{title}</Text>
            </View>
            <Image source={iconArrowNext}/>
        </Paper>
    )
}

const DashboardLayout = (props) => {

    useFirestoreConnect([{
        collection:'service_provider',
        storeAs:'serviceProviders',
    }])


    const menuRef = useRef(null);

    const {
        children
    } = props;

    return(
        <View style={styles.root}>
            <MapView style={styles.mapStyle} />
            <Image source={imgTopBar} style={styles.topBarImage}/>
            <TouchableOpacity style={styles.menuButton} onPress={() => menuRef.current.open()}>
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
                        alignItems: "center",
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15,
                        backgroundColor:'white',
                    }
                }}
            >
                <View style={styles.menuTop}>
                    <Text style={{color:'#555555', fontSize: 20}}>Setting</Text>
                    <TouchableOpacity onPress={() => menuRef.current.close()}>
                        <MaterialIcons name="close" size={20} color="#555555"/>
                    </TouchableOpacity>
                </View>
                <MenuItem icon={iconProfile} title="Profile" onPress={()=>{alert('profile')}} />
                <MenuItem icon={iconMenuCar} title="My Vehicles" onPress={()=>{alert('profile')}} />
                <MenuItem icon={iconDate} title="Last Orders" onPress={()=>{alert('profile')}} />
                <MenuItem icon={iconMarkFill} title="My Locations" onPress={()=>{alert('profile')}} />
                <Text style={{marginTop: 10, width:'90%'}}>Payment</Text>
                <MenuItem icon={iconManageCard} title="Manage Payments" onPress={()=>{alert('profile')}} />
                <Text style={{marginTop: 10, width:'90%'}}>Support</Text>
                <MenuItem icon={iconChart} title="Chat With Us" onPress={()=>{alert('profile')}} />
                <TouchableOpacity style={styles.logOutContainer} onPress={()=>{}}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
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
    },
    menuTop:{
        width:'100%',
        flexDirection:'row',
        backgroundColor:'red',
        justifyContent:'space-between',
        margin: wp('5%'),
        paddingHorizontal: wp('5%')
    },
    logOutContainer:{
      marginTop: 20,
    },
    logoutText:{
        color:'#ED7777',
        fontSize: 20,
    }
})

export default DashboardLayout;