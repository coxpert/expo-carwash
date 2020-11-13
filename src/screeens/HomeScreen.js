import React, {useEffect} from 'react'
import DashboardLayout from "./DashboardLayout";
import {Paper} from "../components";
import {Text, Image, StyleSheet, FlatList, TouchableOpacity, View} from "react-native";
import {BottomPanel} from "../components/BottmPanel";
import {iconAdd, iconMark, iconOval} from "../constants";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {mainColor} from "../constants";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useDispatch} from "react-redux";
import {appSetNavigation} from "../store/actions";

const data = [
    {
        id: 1,
        title: "Car wash service",
        description:'Super exterior car wash with',
    },
    {
        id: 2,
        title: "Car wash service with interior",
        description:'Super exterior car wash with',
    }
]

const HomeScreen = ({navigation}) => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(appSetNavigation(navigation))
    },[])


    const _serviceItemPress = () => {
        navigation.navigate('ServiceProvider')
    }

    const _renderItem = ({item}) => (
            <TouchableOpacity onPress={_serviceItemPress} style={styles.serviceItem}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={iconOval} style={styles.serviceItemImage}/>
                    <View style={styles.serviceItemText}>
                        <Text style={styles.textTitle}>{item.title}</Text>
                        <Text style={styles.textDescription}>{item.description}</Text>
                    </View>
                </View>
                <MaterialIcons name="keyboard-arrow-right" size={32} color={mainColor} style={styles.arrowIcon} />
            </TouchableOpacity>
        )

    return (
        <DashboardLayout>
            <Paper style={styles.paperStyle}>
                <Image source={iconMark}  style={styles.iconStyle}/>
                <Text style={styles.textStyle}>Al Majaz 1 - Sharjah</Text>
            </Paper>

            <Paper style={styles.paperStyle}>
                <Image source={iconMark}  style={styles.iconStyle}/>
                <Text style={styles.textStyle}>Al Majaz 1 - Sharjah</Text>
            </Paper>

            <Paper onPress={()=>{alert('Test')}} style={styles.addVehicleStyle}>
                <Image source={iconAdd}  style={styles.iconStyle}/>
                <Text style={styles.textStyle}>Add Vehicle</Text>
            </Paper>

            <BottomPanel style={{paddingHorizontal: 20, paddingTop: 30}}>
                <FlatList
                    data={data}
                    renderItem = {_renderItem}
                    keyExtractor={item => item.id}
                />
            </BottomPanel>
        </DashboardLayout>
    )
}

const styles = StyleSheet.create({
    addVehicleStyle:{
      justifyContent:'center',
        marginTop: 100,
    },
    paperStyle:{
        marginTop: 100
    },
    iconStyle:{
        marginRight: 10
    },
    textStyle:{

    },
    serviceItem:{
        width: wp('100%')-40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#dfdfdf',
        paddingTop: 15,
    },
    serviceItemImage:{
        width: 45,
        height: 45,
        resizeMode:'cover',
        marginRight: 20,
    },
    serviceItemText:{
    },
    textTitle:{
        fontSize: 18,
    },
    textDescription:{
        fontSize: 14,
        color: '#afafaf'
    }
})

export default HomeScreen;