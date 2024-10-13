import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import colors from './config/colors';
import NavigationBar from './components/Navigation/NavigationBar';
import React from 'react'



export default function App() {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto' />
            <NavigationBar />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
});
 