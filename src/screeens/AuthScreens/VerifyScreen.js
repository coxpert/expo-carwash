import React, {useState, useRef} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Animated,
    TouchableOpacity,
    Platform,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {GradientButton, GradientBorderView} from "../../components";
import Feather from 'react-native-vector-icons/Feather';
import AuthLayout from "./AuthLayout";

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

const VerifyScreen = ({navigation}) =>{

    const [verifyCode, setVerifyCode] = useState('');
    const ref = useBlurOnFulfill({value:verifyCode, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value:verifyCode,
        setValue:setVerifyCode,
    });

    const _handleSubmit = () => {
        navigation.navigate('CreatePassword')
    }


    return (
        <AuthLayout>
            <Animated.View style={styles.formContainer}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                        <Feather name="arrow-left" size={22} color="#555555" style={{marginRight: 10}}/>
                    </TouchableOpacity>
                    <Text style={styles.topText}>Enter mobile number</Text>
                </View>
                <GradientBorderView style={{padding: 10, flexDirection: 'row', justifyContent: 'center'}}>
                    <CodeField
                        ref={ref}
                        {...props}
                        value={verifyCode}
                        onChangeText={setVerifyCode}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({index, symbol, isFocused}) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
                </GradientBorderView>
                <GradientButton onPress={_handleSubmit} style={styles.continueButton} disabled = {verifyCode.length < 6} />
            </Animated.View>
        </AuthLayout>
    )
}
const styles = StyleSheet.create({
    topText:{
        color:'#555555',
        marginBottom: 50,
        fontSize: 18,
    },
    formContainer:{
        width: wp('100%'),
        borderTopLeftRadius: wp('8%'),
        borderTopRightRadius: wp('8%'),
        backgroundColor:'white',
        padding: wp('6%'),
        position:'absolute',
        bottom:0,
        height: Platform.OS==="android"?hp('43%'):hp('73%'),
    },
    phoneNumberGroup:{
        marginTop: 30,
        height: 60,
        flexDirection:'row',
        justifyContent: 'space-around',
    },
    textInputItem:{
      width: 14,
      height: 25,
      borderBottomWidth: 1,
        marginLeft: 6,
        fontSize: 20,
        textAlign:'center'
    },
    continueButton:{
        marginTop: 60,
    },

    // confirm code styles
    codeFieldRoot: {padding: 3},
    cell: {
        width: 20,
        height: 25,
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: '#555555',
        marginRight: 5,
        textAlign: 'center',
        color:'#555555'
    },
    focusCell: {
        borderColor: '#000',
    },
})

export  default  VerifyScreen;
