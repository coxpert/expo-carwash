import React, {useRef, useEffect, useState} from 'react'
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
    TextInput,
    FlatList
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Paper} from "../Paper";
import {colorBorder, colorText, iconArrowLeft, iconArrowNext, iconSearch} from "../../constants";
import RBSheet from "react-native-raw-bottom-sheet";
import {GradientBorderView} from "../GradientBorderView";
import {useSelector} from "react-redux";

export const CardModelDialog = (props) => {

    const dialogRef = useRef(null);
    const [searchText, setSearchText] = useState('');
    const carModelNumbers = useSelector(state=>state.app.carModelNumbers || [])
    const {
        open,
        setStep,
        brand,
        setModelNumber
    } = props;

    useEffect(()=>{
        if(open){
            dialogRef.current.open();
        }else {
            dialogRef.current.close()
        }
    },[open])

    const _modelNumberItem = ({item}) => {
        return (
            <TouchableOpacity onPress={()=>{
                setModelNumber(item)
                setStep(3)
            }} style={styles.brandItem}>
                <View style={{alignItems:'center', flexDirection: 'row'}}>
                    <Text style={{color: colorText}}>{item}</Text>
                </View>
                <Image source={iconArrowNext}/>
            </TouchableOpacity>
        )
    }

    return(
        <>
            <RBSheet
                ref={dialogRef}
                height={hp('100%') - 90}
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
                    <View style={{flex: 1}}>
                        <GradientBorderView containerStyle={{width: 'auto', height:35}} style={{justifyContent: 'center', paddingHorizontal: 20, alignItems:'center'}}>
                            <Text>{brand}</Text>
                        </GradientBorderView>
                    </View>
                    <View style={{flex: 1}}><Text> </Text></View>
                </View>

                <Paper style={styles.searchBox}>
                    <Image source={iconSearch}/>
                    <TextInput
                        placeholder="Search for your vehicle"
                        style={styles.searchTextInput}
                        onChangeText = {text=>setSearchText(text)}
                        value={searchText}
                    />
                </Paper>

                <View style={styles.serviceProvideList}>
                    <FlatList
                        data={carModelNumbers.filter(item=>searchText === ''?true:item.toLowerCase().includes(searchText.toLowerCase()))}
                        renderItem = {_modelNumberItem}
                        keyExtractor={item => item}
                        ListEmptyComponent={()=>(
                            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                                <Text style={{color:'#808080', paddingTop: 50}}>There is no brand you are looking for</Text>
                            </View>
                        )}
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
        padding: 20,
        alignItems:'center',
        flexDirection:'row',
    },
    searchBox:{
        marginTop: 15,
    },
    searchTextInput:{
        flex: 1,
        paddingHorizontal: 10,
    },
    brandItem:{
        width:'100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical: 15,
        paddingHorizontal:'10%',
        borderBottomColor:colorBorder,
        borderBottomWidth: 0.2,
    },
})
