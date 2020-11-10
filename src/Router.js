
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screeens/HomeScreen';

const Stack = createStackNavigator();

export  const AppNavigator = () =>{

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={"Home"}
                screenOptions={{headerTitleAlign: 'center', animationEnabled: true}}
            >
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



