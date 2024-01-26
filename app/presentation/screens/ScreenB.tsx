import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable, Button, Alert,
} from 'react-native';
import BookComponent from "../components/BookComponent";
import {Divider} from "@ui-kitten/components";


const ScreenB = ({ navigation }: {navigation:any}) => {
    const onPressHandler = () => {
        navigation.navigate('ScreenA');
        // navigation.goBack();
    }
    const onPressHandlerD = () => {
        navigation.navigate('ScreenD');
    }
    return (
        <View style={styles.container}>
            <BookComponent/>
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
            >
                <Text style={styles.text}>
                    Go Back to Screen A
                </Text>
            </Pressable>
            <Divider />
            <Pressable
                onPress={onPressHandlerD}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
            >
                <Text style={styles.text}>
                    Go to Screen D
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    greeting: {
        margin: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    }
});

export default ScreenB;
