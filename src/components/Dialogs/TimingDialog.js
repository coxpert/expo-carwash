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
import {iconArrowNext, iconCar, iconOval} from "../../constants";
import RBSheet from "react-native-raw-bottom-sheet";

export const TimingDialog = (props) => {

    const dialogRef = useRef(null);
    const {
        setStep,
    } = props;

    useEffect(()=>{
        dialogRef.current.open();
    },[])

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
                    <Text style={{color:'#555555', fontSize: 20}}>Timing</Text>
                    <TouchableOpacity onPress={() => setStep(0)}>
                        <MaterialIcons name="close" size={20} color="#555555"/>
                    </TouchableOpacity>
                </View>

                <Paper  style={styles.serviceItem}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width:'100%'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={iconOval} style={styles.serviceItemImage}/>
                            <View style={styles.serviceItemText}>
                                <Text style={styles.textTitle}>Al Gamed Car wash</Text>
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
        padding: 20,
        justifyContent: 'space-between',
        alignItems:'center',
        flexDirection:'row',
    }
})
