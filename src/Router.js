
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import PhoneNumberScreen from './screeens/AuthScreens/PhoneNumberScreen';
import PasswordScreen from "./screeens/AuthScreens/PasswordScreen";
import CreatePasswordScreen from "./screeens/AuthScreens/CreateNewPasswordScreen";
import VerifyScreen from "./screeens/AuthScreens/VerifyScreen";

import HomeScreen from "./screeens/HomeScreen";

import {useSelector} from "react-redux";

const Stack = createStackNavigator();

export  const AppNavigator = () =>{

    const {profile} = useSelector(state=>state.firebase);

    console.log(profile)

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={ profile.isEmpty?"PhoneNumber":"Home" }
                screenOptions={{headerTitleAlign: 'center', animationEnabled: true}}
            >

                <Stack.Screen
                    name="PhoneNumber"
                    component={PhoneNumberScreen}
                    options={{
                        header: props => null
                    }}
                />

                <Stack.Screen
                    name="Password"
                    component={PasswordScreen}
                    options={{
                        header: props => null
                    }}
                />

                <Stack.Screen
                    name="CreatePassword"
                    component={CreatePasswordScreen}
                    options={{
                        header: props => null
                    }}
                />

                <Stack.Screen
                    name="Verify"
                    component={VerifyScreen}
                    options={{
                        header: props => null
                    }}
                />

                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        header: props => null
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}



