import React from 'react'
import DashboardLayout from "./DashboardLayout";
import {GradientBorderView, GradientButton, Paper} from "../components";
import {Text, Image, StyleSheet, FlatList, TouchableOpacity, View} from "react-native";
import {BottomPanel} from "../components/BottmPanel";
import {iconAdd, iconMark, iconOval} from "../constants";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {mainColor} from "../constants";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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

const ServiceProviderScreen = () => {


    const _serviceItemPress = () => {

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
            <BottomPanel style={styles.panelBody}>
                <View style={{width:'100%', height: 32}}>
                    <FlatList
                        horizontal={true}
                        data={['Car wash service', 'Oil change', 'Car maintenance']}
                        renderItem = {({item})=>(
                            <GradientBorderView fill containerStyle={{width:'auto', marginLeft: 10}} style={{paddingVertical: 4, paddingHorizontal: 15}}>
                                <Text>{item}</Text>
                            </GradientBorderView>
                        )}
                        keyExtractor={item => item}
                    />
                </View>

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
    panelBody:{
        paddingHorizontal: 20, paddingTop: 30,
        height: hp('100%') - 90,
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

export default ServiceProviderScreen;