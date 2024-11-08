import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/App';
import colors from '@/config/colors';
import Language from '@/components/Language/Language';
import { fonts } from '@/config/fonts/fonts';
import { useTranslation } from 'react-i18next';
import LandindPage from '@/components/Authentication/LandindPage';
import ForgotPassword from '@/components/Authentication/ForgotPassword';
import SignIn from '@/components/Authentication/SignIn';
import SignUp from '@/components/Authentication/SignUp';

export type AuthProps = {
    route: RouteProp<RootStackParamList, 'Auth'>;
}
export default function Auth(props: AuthProps) {
    
    const { t } = useTranslation();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <Language />
                <View style={styles.content}>
                    {props.route.params.auth === "Landind Page" && (<LandindPage /> )}
                    {props.route.params.auth === "Sign In" && (<SignIn /> )}
                    {props.route.params.auth === "Sign Up" && (<SignUp /> )}
                    {props.route.params.auth === "Forgot Password" && (<ForgotPassword /> )}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background,
    },
    scrollContainer: {
        flexGrow: 1, // This allows the ScrollView to expand as needed
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 25,
        paddingRight: 25,
        width: '100%',
    },
    content: {
        marginTop: 100,
        display: 'flex',
        alignItems: 'center'
    }
})