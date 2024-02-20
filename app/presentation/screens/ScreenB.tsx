import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable, Button, Alert, SafeAreaView,
} from 'react-native';
import BookComponent from "../components/BookComponent";
import {Divider, TopNavigation} from "@ui-kitten/components";


const ScreenB = ({ navigation }: {navigation:any}) => {
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
    }
});

export default ScreenB;
