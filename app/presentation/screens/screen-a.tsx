import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable, Button, Alert, SafeAreaView,
} from 'react-native';
import {TopNavigation} from "@ui-kitten/components";


type GreetingProps = {
    contact: IInboxItem
};

type IInboxItem = {
    id: number;
    name: string;
}

const Greeting1 = (props: GreetingProps) => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.greeting}>
            <Text
                onPress={() => {
                    setCount(count + 1);
                    console.log('clicked');
                }}>
                You clicked {props.contact.name} {count} times
            </Text>
        </View>
    );
};
const Greeting2 = (item: IInboxItem) => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.greeting}>
            <Text
                onPress={() => {
                    setCount(count + 1);
                    console.log('clicked');
                }}>
                You clicked {item.name} {count} times
            </Text>
        </View>
    );
};
const Greeting3 = ({id, name}:{id:number, name:string}) => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.greeting}>
            <Text
                onPress={() => {
                    setCount(count + 1);
                    console.log('clicked');
                }}>
                You clicked {name} {count} times
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
                <Greeting1 contact={{id: 1, name: "Rower AA"}}/>
                <Greeting2 id={2} name={"Jain BB"} />
                <Greeting3 id={3} name={"Valera CC"} />
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
