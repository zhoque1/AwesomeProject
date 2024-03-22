import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable, Button, Alert, SafeAreaView, TextInput,
} from 'react-native';
import BookComponent from "../components/BookComponent";
import {Divider, TopNavigation} from "@ui-kitten/components";


const ScreenB = ({ navigation }: {navigation:any}) => {
    const [settings, setSettings] = useState("");
    useEffect(() => {
        if(settings === 'Settings'){
            navigation.navigate('SettingsView');
            setSettings("")
        }
    }, [settings]);
    const onPressHandler = () => {
        navigation.navigate('ScreenA');
        // navigation.goBack();
    }
    const onPressHandlerD = () => {
        navigation.navigate('ScreenD');
    }
    const onPressHandlerPlacardsView = () => {
        navigation.navigate('PlacardsView');
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title={'ScreenB'} alignment="center" />
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    onChangeText={(value) => setSettings(value)}
                />
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
                        Screen D full screen
                    </Text>
                </Pressable>
                <Pressable
                    onPress={onPressHandlerPlacardsView}
                    style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
                >
                    <Text style={styles.text}>
                        Placards View
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
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
    },
    input: {
        borderColor: "gray",
        width: "80%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
});

export default ScreenB;
