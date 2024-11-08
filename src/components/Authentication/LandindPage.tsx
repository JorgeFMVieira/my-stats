import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { fonts } from '@/config/fonts/fonts';
import colors from '@/config/colors';
import Language from '@/components/Language/Language';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/App';

export default function LandindPage() {

    const { t } = useTranslation();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <Language />
                <View style={styles.content}>
                    <Text style={styles.title}>{t('landing_page_website_name')}</Text>
                    <Text style={styles.subtitle}>
                        {t('landing_page_title1')}
                        <Text style={styles.subtitle_important}>{t('landing_page_title2')}</Text>
                        {t('landing_page_title3')}
                        <Text style={styles.subtitle_important}>{t('landing_page_title4')}</Text>
                        {t('landing_page_title5')}
                        <Text style={styles.subtitle_important}>{t('landing_page_title6')}</Text>
                        {t('landing_page_title7')}
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Auth', {auth: "Sign Up"})}
                        style={styles.button}
                    >
                        <Text style={styles.button_txt}>{t('landing_page_signup')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Auth', {auth: "Sign In"})}
                        style={styles.sign_in_btn_wrapper}
                    >
                        <Text style={styles.sign_in_btn}>
                            {t('landing_page_sign_in_btn1')}<Text style={styles.sign_in_btn_important}>{t('landing_page_sign_in_btn2')}</Text>{t('landing_page_sign_in_btn3')}
                        </Text>
                    </TouchableOpacity>
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
    },
    title: {
        fontSize: 32,
        fontFamily: fonts.title.fontFamily,
        fontWeight: fonts.title.fontWeight,
        color: colors.main
    },
    subtitle: {
        fontSize: 20,
        fontFamily: fonts.title.fontFamily,
        fontWeight: fonts.bodyText.fontWeight,
        color: colors.text,
        marginTop: 15,
        textAlign: 'center'
    },
    subtitle_important: {
        fontSize: 20,
        fontFamily: fonts.title.fontFamily,
        fontWeight: fonts.title.fontWeight,
        color: colors.main
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: colors.main,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 50,
    },
    button_txt: {
        fontSize: 20,
        fontFamily: fonts.bodyText.fontFamily,
        fontWeight: fonts.bodyText.fontWeight,
        color: colors.text2
    },
    sign_in_btn_wrapper: {
        marginTop: 20
    },
    sign_in_btn: {
        fontSize: 16,
        fontFamily: fonts.bodyText.fontFamily,
        fontWeight: fonts.bodyText.fontWeight,
        color: colors.secondaryText
    },
    sign_in_btn_important: {
        fontSize: 16,
        fontFamily: fonts.bodyText.fontFamily,
        fontWeight: fonts.bodyText.fontWeight,
        color: colors.main
    }
})