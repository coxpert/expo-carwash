import React, {useRef, useEffect, useState} from 'react'
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RBSheet from "react-native-raw-bottom-sheet";
import {colorText, iconArrowLeft, iconCar} from "../../constants";
import {GradientBorderView} from "../GradientBorderView";
import {ColorPan} from "./ColorPan";
import {ColorPickerDialog} from "./ColorPickerDialog";

export const ColorDialog = (props) => {

    const dialogRef = useRef(null);
    const {
        open,
        setStep,
        brand,
        modelNumber,
        setColor
    } = props;

    const [openColorPicker, setOpenColorPicker] = useState(false);

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
                height={hp('45%')}
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
                        <TouchableOpacity onPress={() => setStep(1)}>
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
                <View style={{width: '100%', alignItems:'center'}}><Text>Choose your vehicle color</Text></View>
                <View style={styles.colorPanel}>
                    {
                        ['white','silver','grey','black','yellow','brown','red','green','blue','other'].map((item, index)=>(
                            <ColorPan key={index} colorName={item} setColor={setColor} openColorPicker = {setOpenColorPicker} setStep={setStep} />
                        ))
                    }
                </View>

                <ColorPickerDialog open = {openColorPicker} pickColor={setColor} setStep = {setStep} setOpen = {setOpenColorPicker} />
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
    colorPanel:{
        width:'90%',
        justifyContent:'space-between',
      flexWrap:'wrap',
      alignItems:'center',
      flexDirection:'row',
        marginTop: 30,
    }
})
