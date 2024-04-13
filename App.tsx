/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import * as eva from '@eva-design/eva';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {ApplicationProvider, IconRegistry} from "@ui-kitten/components";
import {EvaIconsPack} from "@ui-kitten/eva-icons";
import AppRootNav from "./app/presentation/navigation/app-root-nav";

const App = () => {
  return (
      <ApplicationProvider {...eva} theme={eva.light}>
          <IconRegistry icons={EvaIconsPack} />
          <AppRootNav />
      </ApplicationProvider>
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
