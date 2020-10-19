import * as React from 'react';
import {Text, View, Image, StyleSheet, Button, TextInput} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {useNavigation} from '@react-navigation/native';

import {createAppContainer} from "react-navigation";
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';

import Scanner from "./screens/Scanner";
import Museum from "./screens/Museum";
import Home from "./screens/Home";


const Stack = createStackNavigator();
export default function App() {
    const AppSwitchNavigator = createAnimatedSwitchNavigator({
            Home:Home,
            Museum: Museum
        },
        {
            transition: (
                <Transition.Together>
                    <Transition.Out
                        type="slide-bottom"
                        durationMs={700}
                        interpolation="easeIn"
                    />
                    <Transition.In type="fade" durationMs={700}/>
                </Transition.Together>
            ),
        }
    );
    const AppNavigator = createAppContainer(AppSwitchNavigator);

    return (
        <AppNavigator/>
    )

}
