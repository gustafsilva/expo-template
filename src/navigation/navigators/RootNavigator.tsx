import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NotFoundScreen from "core/screens/NotFoundScreen";

import { RootStackParamList } from "navigation/types";
import BottomTabNavigator from "navigation/navigators/BottomTabNavigator";

import ModalScreen from "screens/ModalScreen";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootNavigator;
