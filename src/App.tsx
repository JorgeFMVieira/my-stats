import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import colors from './config/colors';
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { AuthModel } from './components/PageModels/Auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './pages/Authentication/Auth';
import LandindPage from './components/Authentication/LandindPage';
import { LandingPageModel } from './components/PageModels/LandingPageModel';

export type RootStackParamList = {
    'Auth': AuthModel;
    'Landing Page': LandingPageModel;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {


    const RenderAuth = (props: any) => {
        return (
            <Auth {...props} />
        );
    }

    return (
        <NavigationContainer>
            <I18nextProvider i18n={i18n}>
                <SafeAreaView style={styles.container}>
                    <StatusBar style='auto' />
                    {/* <NavigationBar /> */}
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <Stack.Navigator>
                                <Stack.Screen name='Landing Page' component={LandindPage} options={{ headerShown: false }} />
                                <Stack.Screen name='Auth' component={RenderAuth} options={{ headerShown: false }}  />
                        </Stack.Navigator>
                    </ScrollView>
                </SafeAreaView>
            </I18nextProvider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
        scrollContainer: {
        flexGrow: 1, // This allows the ScrollView to expand as needed
        justifyContent: 'flex-start', // Start from the top
        width: '100%',
    },
    content: {
        marginTop: 100,
        display: 'flex',
        alignItems: 'center'
    }
});
 