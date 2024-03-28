import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable, Button, Alert, Animated, ScrollView,
} from 'react-native';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
import BookComponent from "../components/BookComponent";
import {Icon, Layout, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import {QueryClient, useSuspenseQuery} from "@tanstack/react-query";
import {QueryConstants} from "../../di/QueryContants";
// import {RouteProp, useRoute} from "@react-navigation/native";
// import {RootStackParamList} from "../navigation/AppRootNav";
import {DiConstants, inject} from "../../di/di";
import {IPlacardsViewModel} from "../viewmodels/PlacardsViewModel";
import {IPlacardDetailViewModel, PlacardDetailViewModel} from "../viewmodels/PlacardDetailViewModel";
import Placard from "../../domain/models/Placard";
import Image = Animated.Image;


const placardDetailViewModel = inject<IPlacardDetailViewModel>(
    DiConstants.PLACARD_DETAIL_VIEW_MODEL
)
const PlacardDetailView = (
    { route, navigation }: { route: any, navigation:any },
    ) => {
    const insets = useSafeAreaInsets();
    // const route = useRoute<RouteProp<RootStackParamList, 'PlacardDetailView'>>()
    // const id = route?.params?.id
    // const queryClient = route?.params?.queryClient
    const {id, queryClient} = route.params
    const [placard, setPlacard] = React.useState<Placard>()
    const BackIcon = (props:any) => (
        <Icon {...props} name='arrow-back' />
    );

    const accessoryLeft = () => (
        <TopNavigationAction icon={BackIcon} onPress={() => {
            // queryClient.removeQueries({queryKey: [QueryConstants.GET_PLACARD_DETAIL]})
            navigation.goBack()
        }} />
    );

    const { data} = useSuspenseQuery({
        queryKey: [QueryConstants.GET_PLACARD_DETAIL+id],
        queryFn: () => placardDetailViewModel.getPlacardDetail(id)
        },
        queryClient
    )

    return (
        <Layout style={{ flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',       
            paddingTop: 35,
            paddingBottom: 20,
            paddingLeft: insets.left,
            paddingRight: insets.right,}}>
 
            <SafeAreaProvider style={{ flex: 1 }}>
                <TopNavigation title={'PlacardDetailView'} accessoryLeft={accessoryLeft} alignment="center" />
                <ScrollView>
                    <Text style={[styles.detail]}>
                        You clicked { id?? ""}
                    </Text>
                    <View style={styles.container}>
                        <Image
                            style={[styles.image]}
                            resizeMode="cover"
                            source={{ uri: data?.download_url?? "" }}
                        />
                        <Text style={[styles.header]}>
                            {data?.author}
                        </Text>
                        <Text style={[styles.detail]}>
                            You clicked { data?.id?? ""}
                        </Text>
                        <Text style={[styles.detail]}>
                            Width : { data?.width?? ""}
                        </Text>
                        <Text style={[styles.detail]}>
                            Height : { data?.height?? ""}
                        </Text>
                        <Text style={[styles.summery]}>
                            React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, state, and props. If you already know React, you still need to learn some React Native specific stuff, like the native components. This tutorial is aimed at all audiences, whether you have React experience or not.
                        </Text>
                        <Text style={[styles.summery]}>
                            React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, state, and props. If you already know React, you still need to learn some React Native specific stuff, like the native components. This tutorial is aimed at all audiences, whether you have React experience or not.
                        </Text>
                        <Text style={[styles.summery]}>
                            React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, state, and props. If you already know React, you still need to learn some React Native specific stuff, like the native components. This tutorial is aimed at all audiences, whether you have React experience or not.
                        </Text>
                        <Text style={[styles.summery]}>
                            React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, state, and props. If you already know React, you still need to learn some React Native specific stuff, like the native components. This tutorial is aimed at all audiences, whether you have React experience or not.
                        </Text>
                        <Text style={[styles.summery]}>
                            React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, state, and props. If you already know React, you still need to learn some React Native specific stuff, like the native components. This tutorial is aimed at all audiences, whether you have React experience or not.
                        </Text>
                        <Text style={[styles.summery]}>
                            React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, state, and props. If you already know React, you still need to learn some React Native specific stuff, like the native components. This tutorial is aimed at all audiences, whether you have React experience or not.
                        </Text>
                        <Text style={[styles.summery]}>
                            React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, state, and props. If you already know React, you still need to learn some React Native specific stuff, like the native components. This tutorial is aimed at all audiences, whether you have React experience or not.
                        </Text>
                    </View>
                </ScrollView>
 
            </SafeAreaProvider>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        marginTop: 10,
        fontSize: 21,
        fontWeight: '700',
    },
    detail: {
        marginTop: 10,
        fontSize: 16,
    },
    summery: {
        margin: 10,
        fontSize: 16,
    },
    image: {
        width: '100%',
        aspectRatio: 3/2
    },
});

export default PlacardDetailView;
