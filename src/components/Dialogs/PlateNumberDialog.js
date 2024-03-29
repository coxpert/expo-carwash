import React, {useRef, useEffect} from 'react'
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
    TextInput,
    InteractionManager
} from "react-native";
import {Paper} from "../Paper";
import {colorBorder, colorText, iconArrowLeft, iconCar} from "../../constants";
import RBSheet from "react-native-raw-bottom-sheet";
import {GradientBorderView} from "../GradientBorderView";
import Feather from 'react-native-vector-icons/Feather';
import {GradientButton} from "../GradientButton";

export const PlateNumberDialog = (props) => {

    const dialogRef = useRef(null);
    const inputTextRef = useRef(null);

    const {
        setStep,
        brand,
        modelNumber
    } = props;

    useEffect(()=>{
        dialogRef.current.open();
        InteractionManager.runAfterInteractions(() => {
            inputTextRef.current.focus()
        });
    },[])


    const _carSubmit = () => {
        setStep(5)
    }

    return(
        <>
            <RBSheet
                ref={dialogRef}
                openDuration={300}
                closeOnPressMask={false}
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
                    <View style={{flex: 2, alignItems:'center', justifyContent:'center'}}>
                        <GradientBorderView containerStyle={{width: 'auto', height:35}} style={styles.carInfo}>
                            <Image source={iconCar}/>
                            <Text style={{color:colorText,}}>{brand}</Text>
                            <Text style={{color:colorText}}>{modelNumber}</Text>
                        </GradientBorderView>
                    </View>
                    <View style={{flex: 1}}><Text> </Text></View>
                </View>
                <View style={{width: '100%', alignItems:'center'}}><Text>Enter your plate number</Text></View>

                <Paper style={{width: '70%', flexDirection:'row', height: 70, alignItems:'center', marginTop: 20,}}>
                    <View style={{width: '35%', flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontSize: 18, marginRight: 10, color: colorText}}>Dubai</Text>
                        <Feather name="chevron-down" size={18} color="#555555"/>
                    </View>
                    <View style={{width: '30%'}}>
                        <TextInput
                            ref = {inputTextRef}
                            style={{...styles.textInput, marginHorizontal: 10,}}
                        />
                    </View>
                    <View style={{width: '35%'}}>
                        <TextInput
                            keyboardType ="numeric"
                            style={styles.textInput}
                            placeholder="NUMBER"
                        />
                    </View>
                </Paper>
                <GradientButton onPress={_carSubmit} title="Add my car" height={50} style={{width:'80%', height: 60, marginTop: 10 }} />
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
        paddingLeft: 10,
    },
})
