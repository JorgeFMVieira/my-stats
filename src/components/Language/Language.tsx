import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ModalLanguage from './ModalLanguage';
import colors from '../../config/colors';
import ArrowDown from '@/config/SVG/ArrowDown';
import { fonts } from '@/config/fonts/fonts';

export type Language = {
    name: string;
    src: React.JSX.Element;
    code: string;
}

export default function Language() {
    const [currentLanguage, setCurrentLanguage] = useState("English");
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.wrapper}>
            <TouchableOpacity 
                style={styles.container} 
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.text}>{currentLanguage}</Text>
                <ArrowDown style={styles.arrow} />
            </TouchableOpacity>
            <ModalLanguage isModalVisible={isModalVisible} setModalVisible={setModalVisible} currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: colors.secondaryText,
        fontSize: 12,
        fontFamily: fonts.bodyText.fontFamily,
        fontWeight: fonts.bodyText.fontWeight,
    },
    arrow: {
        marginLeft: 8, // Adds some space between the text and the arrow
    },
});