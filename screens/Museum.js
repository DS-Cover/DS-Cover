
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainMap from './MainMap';
import Scanner from "./Scanner";

//this component only render the navbar, don't get twisted with the name "museum". -Moun
const MainMapStack = createStackNavigator();

function MainMapStackScreen() {

    return (
        <MainMapStack.Navigator>
            <MainMapStack.Screen name="Main Map" component={MainMap}/>
            <MainMapStack.Screen name="Scanner" component={Scanner}/>
        </MainMapStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function Museum() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Trade"
                           tabBarOptions={{
                               activeTintColor: '#e91e63',
                           }}>

                <Tab.Screen name="MainMap" component={MainMapStackScreen}
                            options={{
                                tabBarLabel: 'Main',
                                tabBarIcon: ({color}) => (
                                    <MaterialCommunityIcons name="map" color={color} size={26}/>
                                ),
                            }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
