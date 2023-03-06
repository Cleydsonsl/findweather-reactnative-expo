import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from "../screens/welcome";
import { Home } from "../screens/home";
import {HomeContent} from "../components/templates/HomeContent";

const { Navigator, Screen } = createStackNavigator();

export function StackNavigator() {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Welcome"
        >
            <Screen name="Welcome" component={Welcome}/>
            <Screen name="Home" component={Home}/>
            <Screen name="HomeContent" component={HomeContent}/>
        </Navigator>
    )
}
