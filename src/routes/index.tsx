import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "../hooks/StackNavigator";

export function Routes(){
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
