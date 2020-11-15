import React, {useRef, useEffect, useState} from 'react'
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
import PropTypes from 'prop-types';
import {colorBorder, colorText, colorTextBlue, colorTextGrey, iconArrowNext, iconCar, iconOval} from "../../constants";
import RBSheet from "react-native-raw-bottom-sheet";

export const TimingDialog = (props) => {

    const dialogRef = useRef(null);
    const { setStep, car, serviceProvider} = props;

    const [bookTime, setBookTime] = useState({
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        date: new Date().getDate(),
        startTime: null,
        endTime: null,
    });



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
                    <View style={{flex: 1}}>
                        <View style={styles.carCardTop}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Image source={iconOval} style={styles.serviceItemImage}/>
                                <View style={styles.serviceItemText}>
                                    <Text style={styles.textTitle}>{serviceProvider.name}</Text>
                                    <View style={{flexDirection: 'row', marginTop: 4,}}>
                                        <Image source={iconCar}  style={{marginRight: 5, width: 22, resizeMode: 'cover'}}/>
                                        <Text style={{marginRight: 5, fontSize: 14, color:'#555555',}}>{serviceProvider.name_ar}</Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={styles.reviewScore}> {serviceProvider.review} </Text>
                        </View>
                        <View style={styles.carCardBottom}>
                            <View>
                                <Text style={{color: colorText, fontSize: 18}}> { car.brand } { car.modelNumber }</Text>
                                <Text style={{color: colorTextGrey}}> {car.plateNumber} </Text>
                            </View>
                            <View>
                                <Text style={{color: colorTextBlue}}>Change</Text>
                            </View>
                        </View>
                    </View>
                </Paper>

            </RBSheet>
        </>
    )
}

TimingDialog.propTypes = {
    serviceProvider: {
        name: PropTypes.obj.isRequired
    },
    car: PropTypes.obj
}

TimingDialog.defaultProps = {
    serviceProvider:{
      name:"Al Gamed Car wash",
      review:4.8,
      name_ar:"45 AEG",
      timings:{
          "Monday":{
              isOpen: true,
              timings: [
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  }
              ]
          },
          "Tuesday":{
              isOpen: true,
              timings: [
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  }
              ]
          },
          "Wednesday":{
              isOpen: true,
              timings: [
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  }
              ]
          },
          "Thursday":{
              isOpen: true,
              timings: [
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  }
              ]
          },
          "Friday":{
              isOpen: true,
              timings: [
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  }
              ]
          },
          "Saturday":{
              isOpen: true,
              timings: [
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  }
              ]
          },
          "Sunday":{
              isOpen: true,
              timings: [
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  },
                  {
                      startTime:"9: 00 AM",
                      endTime:"10:00 AM",
                  }
              ]
          },
      }
    },
    car:{
        brand:"Peugeot",
        modelNumber:"308",
        plateNumber:"B 21856",
    }
}

const styles = StyleSheet.create({
    menuTop:{
        width: '100%',
        padding: 20,
        justifyContent: 'space-between',
        alignItems:'center',
        flexDirection:'row',
    },
    serviceItem:{
        padding: 0,
        height: 'auto'
    },
    carCardTop:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'100%',
        alignItems:'center',
        borderStyle:'solid',
        borderBottomWidth: 1,
        borderBottomColor: colorBorder,
        padding: 15,
    },
    carCardBottom:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        alignItems: 'center',
        padding: 15,
    },
    textTitle:{
      fontSize: 18,
    },
    reviewScore:{
        fontSize: 16,
        color: '#10EE10',
    },
    serviceItemImage:{
        width: 45,
        height: 45,
        resizeMode:'cover',
        marginRight: 20,
    },
})
