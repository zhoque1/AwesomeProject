import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable, Button, Alert, SafeAreaView,
} from 'react-native';
import {TopNavigation} from "@ui-kitten/components";


type GreetingProps = {
    firstName: string;
};

const Greeting = (props: GreetingProps) => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.greeting}>
            <Text
                onPress={() => {
                    setCount(count + 1);
                    console.log('clicked');
                }}>
                You clicked {props.firstName} {count} times
            </Text>
        </View>
    );
};
const ScreenA = ({ navigation }: { navigation:any }) => {
    const onPressHandler = () => {
        navigation.navigate('ScreenC');
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title={'ScreenA'} alignment="center" />
            <View style={styles.container}>
                <Greeting firstName="Rexxar AA" />
                <Greeting firstName="Jaina BB" />
                <Greeting firstName="Valeera CC" />
                <Pressable
                    onPress={onPressHandler}
                    style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
                >
                    <Text style={styles.text}>
                        Screen C with bottom tab
                    </Text>
                </Pressable>
                <Pressable
                    onPress={()=>{navigation.navigate('Carousel')}}
                    style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
                >
                    <Text style={styles.text}>
                        Carousel Demo
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

export default ScreenA;
