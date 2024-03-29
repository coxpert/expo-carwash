import React, {useRef, useEffect} from 'react'
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Paper} from "../Paper";
import {iconArrowNext} from "../../constants";
import RBSheet from "react-native-raw-bottom-sheet";

export const CheckoutDialog = (props) => {

    const dialogRef = useRef(null);
    const {
        open,
        setStep,
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
                    <Text style={{color:'#555555', fontSize: 20}}>Checkout</Text>
                    <TouchableOpacity onPress={() => setStep(0)}>
                        <MaterialIcons name="close" size={20} color="#555555"/>
                    </TouchableOpacity>
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
        padding: 20,
        justifyContent: 'space-between',
        alignItems:'center',
        flexDirection:'row',
    }
})
