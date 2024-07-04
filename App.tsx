const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import IPhoneSE2ndGenerationLo from "./screens/IPhoneSE2ndGenerationLo";
import IPhoneSE2ndGeneration from "./screens/IPhoneSE2ndGeneration";
import IPhoneSE2ndGeneration2 from "./screens/IPhoneSE2ndGeneration2";
import IPhoneSE2ndGenerationAI from "./screens/IPhoneSE2ndGenerationAI";
import IPhoneSE2ndGeneration3 from "./screens/IPhoneSE2ndGeneration3";
import IPhoneSE2ndGeneration4 from "./screens/IPhoneSE2ndGeneration4";
import IPhoneSE2ndGeneration5 from "./screens/IPhoneSE2ndGeneration5";
import StatePlaceholder from "./components/StatePlaceholder";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen
              name="IPhoneSE2ndGenerationIn"
              component={IPhoneSE2ndGenerationIn}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="IPhoneSE2ndGenerationLo"
              component={IPhoneSE2ndGenerationLo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhoneSE2ndGeneration"
              component={IPhoneSE2ndGeneration}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="IPhoneSE2ndGeneration1"
              component={IPhoneSE2ndGeneration1}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="IPhoneSE2ndGeneration2"
              component={IPhoneSE2ndGeneration2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhoneSE2ndGenerationAI"
              component={IPhoneSE2ndGenerationAI}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhoneSE2ndGeneration3"
              component={IPhoneSE2ndGeneration3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhoneSE2ndGeneration4"
              component={IPhoneSE2ndGeneration4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhoneSE2ndGeneration5"
              component={IPhoneSE2ndGeneration5}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
