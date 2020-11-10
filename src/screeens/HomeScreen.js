import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {imgBackground, imgLogoText, imgMenu1, imgMenu2, imgMenu3} from "../constants";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';

const colorGradientStart = '#21FF99';
const colorGradientEnd = '#008CFF';

const HomeScreen = ({navigation}) =>{
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

            <View style={styles.formContainer}>
                <LinearGradient
                    colors={['rgba(0,0,0,0.8)', 'transparent']}
                    style={{}}
                >

                </LinearGradient>
            </View>
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
    formContainer:{
        width: wp('100%'),
        borderTopLeftRadius: wp('8%'),
        borderTopRightRadius: wp('8%'),
        backgroundColor:'white',
        height: hp('26%'),
        padding: wp('10%'),
        position:'absolute',
        bottom:0
    },
})

export  default  HomeScreen;
