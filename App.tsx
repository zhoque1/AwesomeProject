/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';

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

const App = () => {
  return (
    <View style={styles.container}>
      <Greeting firstName="Rexxar A" />
      <Greeting firstName="Jaina B" />
      <Greeting firstName="Valeera C" />
      <Button
        onPress={() => Alert.alert('You need to implement delegate')}
        title="Reset All"
      />
    </View>
  );
};

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
});

export default App;
