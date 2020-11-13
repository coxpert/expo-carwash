import React, {useState, useEffect} from 'react'
import DashboardLayout from "./DashboardLayout";
import {
    CardModelDialog, CheckoutDialog,
    ColorDialog,
    GradientBorderView,
    GradientPanel,
    LoadingIcon,
    Paper,
    PlateNumberDialog, TimingDialog
} from "../components";
import {Text, Image, StyleSheet, FlatList, View} from "react-native";
import {BottomPanel} from "../components/BottmPanel";
import {colorTextBlue, iconCar, iconOval, imgDate} from "../constants";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//Dialogs
import {CarBrandsDialog} from "../components";
import {useSelector} from "react-redux";


const serviceList = ['Car wash service', 'Oil change', 'Car maintenance']

const ServiceProviderScreen = () => {

    const [step, setStep] = useState(2);
    const [serviceProvider, setServiceProvider] = useState('');
    const [serviceCategory, setServiceCategory] = useState(serviceList[0]);
    const [vehicle, setVehicle] = useState('car');
    const [brand, setBrand] = useState('');
    const [modelNumber, setModelNumber] = useState('');
    const [color, setColor] = useState('');
    const [plateNumber, setPlateNumber] = useState('');

    const serviceProviders = useSelector(state=>state.firestore.ordered.serviceProviders || []);

    const _serviceItemPress = (item) => {
        setServiceProvider(item);
        setStep(1);
    }

    const _renderItem = ({item}) => (
        <Paper onPress={()=>{_serviceItemPress(item)}} style={styles.serviceItem}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width:'100%'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={iconOval} style={styles.serviceItemImage}/>
                    <View style={styles.serviceItemText}>
                        <Text style={styles.textTitle}>{item.name}</Text>
                        <View style={{flexDirection: 'row', marginTop: 4,}}>
                            <Image source={iconCar}  style={{marginRight: 5, width: 22, resizeMode: 'cover'}}/>
                            <Text style={{marginRight: 5, fontSize: 14, color:'#555555',}}>45</Text>
                            <Text style={{ fontSize: 14, color:'#555555'}}>AEG</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.reviewScore}>4.8</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%', alignItems: 'center', marginTop: 13,}}>
                <GradientPanel
                    borderRadius={3}
                    colors={['#21FF9933', '#008CFF33']}
                    style={{width:'85%', height: 34, justifyContent: 'center', alignItems:'center'}}
                >
                    <Text style={{color: colorTextBlue}}>2020/11/09</Text>
                </GradientPanel>
                <Image source={imgDate} style={{height: 34, resizeMode: 'contain'}}/>
            </View>
        </Paper>
    )

    return (
        <DashboardLayout>
            <BottomPanel style={styles.panelBody}  hidden={step > 0}>
                <View style={styles.serviceCategoryList}>
                    <FlatList
                        horizontal={true}
                        data={['Car wash service', 'Oil change', 'Car maintenance']}
                        renderItem = {({item})=>(
                            <GradientBorderView
                                fill = {serviceCategory === item}
                                containerStyle={{width:'auto', marginLeft: 10}}
                                style={{paddingVertical: 4, paddingHorizontal: 15}}
                                onPress={()=>{setServiceCategory(item)}}
                            >
                                <Text style = {{color: serviceCategory === item ?'white':'#555555'}}>{item}</Text>
                            </GradientBorderView>
                        )}
                        keyExtractor={item => item}
                    />
                </View>
                <View style={styles.serviceProvideList}>
                    <FlatList
                        data={serviceProviders}
                        renderItem = {_renderItem}
                        keyExtractor={item => item.id.toString()}
                        ListEmptyComponent={()=>(
                            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                                <LoadingIcon/>
                            </View>
                        )}
                    />
                </View>
            </BottomPanel>

            {step === 1 && <CarBrandsDialog setBrand={setBrand} setStep={setStep} setVehicle={setVehicle} vehicle={vehicle}/>}
            {step === 2 && <CardModelDialog setModelNumber={setModelNumber} brand={brand} setStep={setStep}/>}
            {step === 3 && <ColorDialog setColor={setColor} setStep={setStep} brand={brand} modelNumber={modelNumber}/>}
            {/*<PlateNumberDialog brand={brand} modelNumber={modelNumber} setStep = {setStep} open = { step === 4 } />*/}
            {/*<TimingDialog setBrand = {setPlateNumber} setStep = {setStep} open = { step === 5 } />*/}
            {/*<CheckoutDialog setStep = {setStep} open = { step === 6 } />*/}

        </DashboardLayout>
    )
}

const styles = StyleSheet.create({
    panelBody:{
        height: hp('100%') - 90,
    },
    serviceCategoryList:{
        width:'100%',
        height: 62,
        marginBottom: 20,
        paddingTop: 30,
        paddingHorizontal:'5%',
    },
    serviceItem:{
        width: wp('100%')-40,
        flexDirection:'column',
        paddingBottom: 20,
        paddingTop: 20,
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
        fontSize: 16,
        color:'#555555',
        fontWeight:'400',
    },
    textDescription:{
        fontSize: 14,
        color: '#afafaf'
    },serviceProvideList:{
        flex: 1,
        width:'100%',
        paddingBottom: 50,
    },
    reviewScore:{
        fontSize: 16,
        color: '#10EE10',
    }
})

export default ServiceProviderScreen;