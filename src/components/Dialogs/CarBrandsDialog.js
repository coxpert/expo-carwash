import React, {useRef, useEffect} from 'react'
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
    FlatList,
    TextInput
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Paper} from "../Paper";
import {colorBorder, colorText, iconCar, iconLeftArrow, iconScooter, iconSearch} from "../../constants";
import RBSheet from "react-native-raw-bottom-sheet";
import {LoadingIcon} from "../LoadingIcon";
import {GradientBorderView} from "../GradientBorderView";
import {useSelector} from "react-redux";
import {setBatch} from "react-redux/lib/utils/batch";

export const CarBrandsDialog = (props) => {

    const {
        open,
        setStep,
        setVehicle,
        setBrand,
        vehicle,
    } = props;

    const dialogRef = useRef(null);
    const carBrands = useSelector(state=>state.app.carBrands || []);

    useEffect(()=>{
        if(open){
            dialogRef.current.open();
        }else {
            dialogRef.current.close()
        }
    },[open])

    const _brandItem = ({item}) => {
        return (
            <TouchableOpacity onPress={()=>{
                setBrand(item)
                setStep(2)
            }} style={styles.brandItem}>
                <View style={{alignItems:'center', flexDirection: 'row'}}>
                    <Text style={{color: colorText}}>{item}</Text>
                </View>
                <Image source={iconLeftArrow}/>
            </TouchableOpacity>
        )
    }

    return(
        <>
            <RBSheet
                ref={dialogRef}
                height={hp('100%') - 90}
                openDuration={300}
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
                    <TouchableOpacity onPress={() => setStep(0)}>
                        <MaterialIcons name="close" size={20} color="#555555"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.vehicleKind}>
                    {
                        vehicle === 'car'?(
                            <>
                                <GradientBorderView containerStyle={{width: 94, height: 40, marginRight: 10,}} style={{...styles.vehicleKindItem,}}>
                                    <Image source={iconCar} style={{marginRight: 10}}/>
                                    <Text>Car</Text>
                                </GradientBorderView>
                                <Paper style={styles.vehicleKindItem} onPress={()=>{setVehicle('scooter')}}>
                                    <Image source={iconScooter} style={{marginRight: 10}}/>
                                    <Text>Scooter</Text>
                                </Paper>
                            </>
                        ):(
                            <>
                                <Paper style={{...styles.vehicleKindItem,...{marginRight: 10}}} onPress={()=>{setVehicle('car')}}>
                                    <Image source={iconCar} style={{marginRight: 10}}/>
                                    <Text>Car</Text>
                                </Paper>
                                <GradientBorderView containerStyle={{width: 94, height: 40,}} style={{...styles.vehicleKindItem,}}>
                                    <Image source={iconScooter} style={{marginRight: 10}}/>
                                    <Text>Scooter</Text>
                                </GradientBorderView>
                            </>
                        )
                    }
                </View>
                    <Paper style={styles.searchBox}>
                        <Image source={iconSearch}/>
                        <TextInput
                            placeholder="Search for your vehicle"
                            style={styles.searchTextInput}
                        />
                    </Paper>
                <View style={styles.serviceProvideList}>
                    <FlatList
                        data={carBrands}
                        renderItem = {_brandItem}
                        keyExtractor={item => item}
                        ListEmptyComponent={()=>(
                            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                                <LoadingIcon/>
                            </View>
                        )}
                    />
                </View>
            </RBSheet>
        </>
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
    menuTop:{
        width: '100%',
        paddingTop: 20,
        paddingRight: 20,
        justifyContent: 'flex-end',
        alignItems:'center',
        flexDirection:'row',
    },
    brandItem:{
        width:'100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical: 15,
        paddingHorizontal:'10%',
        borderBottomColor:colorBorder,
        borderBottomWidth: 0.2,
    },
    vehicleKind: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height: 30,
    },
    vehicleKindItem:{
        width: 90,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    searchBox:{
        marginTop: 25,
    },
    searchTextInput:{
        flex: 1,
        paddingHorizontal: 10,
    }
})
