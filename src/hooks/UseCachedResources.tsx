import React, { useEffect, useState } from 'react';

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import {
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export function UseCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();

                await Font.loadAsync({
                    Roboto_400Regular,
                    Roboto_500Medium,
                    Roboto_700Bold,
                });
            } catch (error) {
                console.warn(error);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);


    return isLoadingComplete;
}