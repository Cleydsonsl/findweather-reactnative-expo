import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from "../screens/welcome";
import { Home } from "../screens/home";
import {HomeContent} from "../components/templates/HomeContent";
import {Search} from "../screens/search";

const { Navigator, Screen } = createStackNavigator();

export function StackNavigator() {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Search"
        >
            <Screen name="Welcome" component={Welcome}/>
            <Screen name="Home" component={Home}/>
            <Screen name="HomeContent" component={HomeContent}/>
            <Screen name="Search" component={Search}/>
        </Navigator>
    )
}
