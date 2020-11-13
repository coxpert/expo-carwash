import React, {useRef, useEffect, useState} from 'react'
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
    TextInput
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Paper} from "../Paper";
import {colorBorder, colorText, iconArrowLeft, iconArrowNext, iconCar, iconSearch} from "../../constants";
import RBSheet from "react-native-raw-bottom-sheet";
import {GradientBorderView} from "../GradientBorderView";
import {ColorPan} from "./ColorPan";
import Feather from 'react-native-vector-icons/Feather';

export const PlateNumberDialog = (props) => {

    const dialogRef = useRef(null);
    const {
        open,
        setStep,
        brand,
        modelNumber
    } = props;

    useEffect(()=>{
        if(open){
            dialogRef.current.open();
        }else {
            dialogRef.current.close()
        }
    },[open])


    return(
        <>
            <RBSheet
                ref={dialogRef}
                openDuration={300}
                closeOnPressBack={false}
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
                    <View style={{flex: 1}}>
                        <TouchableOpacity onPress={() => setStep(3)}>
                            <Image source={iconArrowLeft} />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 2}}>
                        <GradientBorderView containerStyle={{width: 'auto', height:35}} style={styles.carInfo}>
                            <Image source={iconCar}/>
                            <Text style={{color:colorText,}}>{brand}</Text>
                            <Text style={{color:colorText}}>{modelNumber}</Text>
                        </GradientBorderView>
                    </View>
                    <View style={{flex: 1}}><Text> </Text></View>
                </View>
                <View style={{width: '100%', alignItems:'center'}}><Text>Enter your plate number</Text></View>

                <Paper style={{width: '70%', flexDirection:'row', height: 70, alignItems:'center'}}>
                    <View style={{width: '35%', flexDirection:'row', alignItems:'center', padding: 12}}>
                        <Text>Dubai</Text>
                        <Feather name="chevron-down" size={18} color="#555555"/>
                    </View>
                    <View style={{width: '30%'}}>
                        <TextInput
                            style={styles.textInput}
                        />
                    </View>
                    <View style={{width: '35%'}}>
                        <TextInput
                            style={styles.textInput}
                        />
                    </View>
                </Paper>

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
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
        justifyContent: 'flex-end',
        alignItems:'center',
        flexDirection:'row',
    },
    carInfo:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center',
    },
    textInput:{
      borderBottomWidth: 1,
      borderBottomColor: colorBorder,
        backgroundColor:'red'
    },
})
