import React, {useRef, useEffect, useState} from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RBSheet from "react-native-raw-bottom-sheet";
import { ColorPicker, toHsv } from 'react-native-color-picker'

export const ColorPickerDialog = (props) => {

    const dialogRef = useRef(null);
    const [color, setColor] = useState(toHsv('green'));
    const {
        open,
        pickColor,
        setStep,
        setOpen
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
                height={hp('80%')}
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
                    <TouchableOpacity onPress={()=>{setOpen(false)}}>
                        <MaterialIcons name="close" size={20} color="#555555"/>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1, width:'90%', paddingBottom: 30}}>
                    <ColorPicker
                        oldColor='purple'
                        color={color}
                        onColorChange={setColor}
                        onColorSelected={color => {
                            pickColor(color)
                            setStep(4);
                            setOpen(false)
                        }}
                        onOldColorSelected={color => {
                            pickColor(color);
                            setStep(5);
                            setOpen(false)
                        }}
                        style={{flex: 1}}
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
})
