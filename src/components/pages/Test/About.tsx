import { StyleSheet, Text, View } from 'react-native'

export default function About() {
    return (
        <View style={styles.about}>
            <Text>About</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    about: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})