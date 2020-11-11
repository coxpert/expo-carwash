import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    Animated,
} from 'react-native';
import {imgBackground, imgLogoText, imgMenu1, imgMenu2, imgMenu3} from "../../constants";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {GradientButton, GradientPanel} from "../../components";
import Feather from 'react-native-vector-icons/Feather';
import {useFirestore} from "react-redux-firebase";

const CreatePasswordScreen = () =>{

    const [formContainerHeight] = useState( new Animated.Value(hp('26%')))
    const [showButton, setShowButton] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('+971');
    const firestore = useFirestore();

    const _handleChange = (text) => {
        setPhoneNumber(text.replace(/ /g,'').replace(/(\d{2})(\d{3})(\d{4})/,"$1 $2 $3") )
    }

    const _animateFormContainer = () => {
        Animated.timing(formContainerHeight, {
            toValue: hp('73%'),
            duration: 600,
        }).start();
        setShowButton(true);
    }

    const _handleSubmit = () =>{
        firestore.collection('users')
            .where('phone_number','=', countryCode + phoneNumber)
            .get()
            .then(res=>{
                console.log(res)
            })
    }

    return (
        <ImageBackground
            source={imgBackground}
            style={styles.root}
        >
            <View style={styles.logoTextContainer} >
                <Image source={imgLogoText}  style ={styles.logoText}/>
            </View>

            <View style={styles.menuContainer}>
                <View style={styles.menuitem}>
                    <Image source={imgMenu1} style={styles.menuImage}/>
                    <Text style={styles.menuText}>Growing list of profisinal providers</Text>
                </View>
                <View style={styles.menuitem}>
                    <Image source={imgMenu2} style={styles.menuImage}/>
                    <Text style={styles.menuText}>Schedule your car wash any time</Text>
                </View>
                <View style={styles.menuitem}>
                    <Image source={imgMenu3} style={styles.menuImage}/>
                    <Text style={styles.menuText}>Your car will always be shinig. so Chill!</Text>
                </View>
            </View>

            <Animated.View style={{height: formContainerHeight,...styles.formContainer}}>
                { showButton  && <Text style={styles.topText}>Enter mobile number</Text>}
                <GradientPanel style = { styles.phoneNumberGroup} >
                    <View style={styles.countryCode} >
                        <Feather name="chevron-down" size={22} color="#555555"/>
                        <Text style={styles.countryCodeText}>+971</Text>
                    </View>
                    <TextInput
                        style={styles.phoneNumber}
                        keyboardType ="numeric"
                        placeholder = "Phone Number"
                        value={phoneNumber}
                        onChangeText={_handleChange}
                        onFocus={_animateFormContainer}
                    />
                </GradientPanel>
                {showButton  && <GradientButton onPress={_handleSubmit} style={styles.continueButton} disabled = { phoneNumber.toString().length < 9} />}
            </Animated.View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    root:{
        position: 'relative',
        flex: 1,
        width: '100%'
    },
    logoTextContainer:{
        marginTop:hp('15%'),
        width: wp('100%'),
        height: 70,
    },
    logoText:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    },
    menuContainer:{
        height: hp('43%'),
        width: wp('100%'),
        paddingVertical: hp('5%'),
        paddingHorizontal:wp('5%'),
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
    },
    menuitem:{
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuImage:{
        width:wp('20%'),
        height:wp('20%'),
        resizeMode: 'stretch'
    },
    menuText:{
        width:'80%',
        paddingLeft:10,
        color: 'white',
        fontSize: wp('4.7%')
    },
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
        bottom:0
    },
    phoneNumberGroup:{
        marginTop: 30,
        height: 60,
        flexDirection:'row',
        justifyContent: 'space-around',
    },
    countryCode:{
        width: '30.6%',
        height:'100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    countryCodeText:{
        color: '#555555',
        fontSize: 18,
    },
    phoneNumber:{
        width:'68%',
        backgroundColor:'white',
        height:'100%',
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        padding: 10,
        fontSize: 18,
    },
    continueButton:{
        marginTop: 60,
    }
})

export  default  CreatePasswordScreen;
