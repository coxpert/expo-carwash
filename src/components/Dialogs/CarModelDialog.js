import React, {useRef, useEffect} from 'react'
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Paper} from "../Paper";
import {iconArrowLeft} from "../../constants";
import RBSheet from "react-native-raw-bottom-sheet";

export const CardModelDialog = (props) => {

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

    const BrandItem = ({item}) => {
        return (
            <Paper onPress={()=>{}} style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between', paddingVertical: 15,}}>
                <View style={{alignItems:'center', flexDirection: 'row'}}>
                    <Text>{item}</Text>
                </View>
                <Image source={iconArrowNext}/>
            </Paper>
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
                    <TouchableOpacity onPress={() => setStep(1)}>
                        <Image source={iconArrowLeft} />
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
        alignItems:'center',
        flexDirection:'row',
    }
})
