import React, {useState} from 'react';
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
import BookComponent from "../components/book-component";
import {Divider, Icon, Layout, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import {QueryClient,useQueryClient, useSuspenseQuery} from "@tanstack/react-query";
import {QueryConstants} from "../../di/query-contants";
import {DiConstants, inject} from "../../di/di";
import {IPlacardDetailViewModel, PlacardDetailViewmodel} from "../viewmodels/placard-detail.viewmodel";
import Placard from "../../domain/models/placard";
import Image = Animated.Image;
import Favorite from "../components/favorite";
import HightLights from "../components/hightLights";
import style from '../components/styles'



const placardDetailViewModel = inject<IPlacardDetailViewModel>(
    DiConstants.PLACARD_DETAIL_VIEW_MODEL
)
const PlacardDetailView = (
    { route, navigation }: { route: any, navigation:any },
    ) => {
    const insets = useSafeAreaInsets();
    const queryClient = useQueryClient();
    // const route = useRoute<RouteProp<RootStackParamList, 'PlacardDetailView'>>()
    // const id = route?.params?.id
    // const queryClient = route?.params?.queryClient
    const {id} = route.params
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

    const renderImageSection = () => {
        return (
            <View
                style={{width: '100%', height: 230}}>
                <Image
                    style={[styles.image]}
                    resizeMode="cover"
                    source={{ uri: data?.download_url?? "" }}
                />
                <View style={{position: 'absolute', top: 10, right: 10}}>
                    <Favorite k={id}/>
                </View>
            </View>
        );
    };
    const renderStaticMap = () => {
        return (
            <View
                style={{width: '100%', height: 180,  top: 55}}>
                <Image
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                    source={require('../../assets/images/static_map.png')}
                />
            </View>
        );
    };

    const renderBrochure = () => {
        return (
            <View
                style={{width: '100%', height: 250}}>
                <Image
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                    source={require('../../assets/images/brochure.png')}
                />
            </View>
        );
    };

    return (
        <Layout style={{ flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,}}>

            <SafeAreaProvider style={{ flex: 1 }}>
                <TopNavigation title={'Detail View'} accessoryLeft={accessoryLeft} alignment="center" />
                <ScrollView>
                    {/*<Text style={[styles.detail]}>*/}
                    {/*    You clicked { id?? ""}*/}
                    {/*</Text>*/}
                    <View style={styles.container}>
                        {renderImageSection()}
                        {renderStaticMap()}
                        <HightLights />
                        {renderBrochure()}
                        <Layout style={style.layoutContainer}>
                            <Text style={{fontSize: 14, lineHeight: 22, fontWeight: '700',}}>
                                ABOUT HOLLYWOOD
                            </Text>
                            <Text style={{fontSize: 14, textAlign: 'left', color: 'color-basic-600', paddingTop: 10, paddingBottom: 10}}>
                                Hollywood is defined by its position at the center of the entertainment industry. Netflix, Paramount, Viacom, Capitol Records, the Academy of Motion Picture Arts and Sciences, and Technicolor all have sizable footprints in the area. Streaming juggernaut Netflix has a considerable presence after moving to the area from Beverly Hills in 2017.
                                Famous for its storied past, Hollywood has undergone a rebirth, with a remarkable amount of office, residential, hotel, and retail development recently completed or underway. It has become a much more dynamic environment and, as a result, is one of the more sought-after office locations in the metro.
                                Hollywood also benefits from its central location in Greater Los Angeles served by numerous public transportation options. The L.A. Metro Red Line offers employees easy access to points including Downtown Los Angeles, Koreatown, Los Feliz, and North Hollywood. The 101 Freeway crosses the area, allowing commuters direct access to communities in the San Fernando Valley to the north, as well as neighborhoods to the south in the City of Los Angeles.
                            </Text>
                            <Divider />
                        </Layout>
                        <Layout style={{marginLeft: 25, marginRight: 20, marginTop: 20, }}>
                            <Text style={{fontSize: 14, lineHeight: 22, fontWeight: '700',}}>
                                ABOUT THE OWNER
                            </Text>
                            <Text style={{fontSize: 14, textAlign: 'left', color: 'color-basic-600', paddingTop: 10,}}>
                                Hollywood Offices is a leading property management and real estate developer in Hollywood. Located in the heart of the entertainment industry, the company specializes in providing clients with the highest quality of service by offering the most competitive prices. With over fifty years of business experience, their highly trained technicians and support personnel provide an exceptional level of expertise, versatility, and responsiveness. Their staff is available to quickly respond and accommodate all office requirements.
                            </Text>
                            <Divider />
                        </Layout>
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
