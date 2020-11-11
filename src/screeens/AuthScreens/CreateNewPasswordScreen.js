import React, {useEffect, useState, useRef} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Animated,
    Platform, InteractionManager,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {GradientButton, GradientBorderView} from "../../components";
import AuthLayout from "./AuthLayout";


const CreatePasswordScreen = ({navigation}) =>{

    const [password, setPassword] = useState('');
    const passwordInputRef = useRef(null);
    const _handleSubmit = () => {
        navigation.navigate('Home')
    }

    useEffect(()=>{
        if(passwordInputRef){
            InteractionManager.runAfterInteractions(() => {
                passwordInputRef.current.focus()
            });
        }
    },[]);

    return (
        <AuthLayout>
            <Animated.View style={styles.formContainer}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.topText}>Create password</Text>
                </View>
                <GradientBorderView style={{padding: 10, flexDirection: 'row', justifyContent: 'center'}}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.passwordInput}
                        value ={password}
                        onChangeText = {(text)=>{setPassword(text)}}
                        ref = {passwordInputRef}
                        placeholder="Password"
                    />
                </GradientBorderView>
                <GradientButton onPress={_handleSubmit} style={styles.continueButton} disabled = {password.length < 8} />
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
    passwordInput:{
        width:'100%',
        backgroundColor: 'white'
    }
})

export  default  CreatePasswordScreen;
