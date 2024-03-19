import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable, Button, Alert, SafeAreaView,
} from 'react-native';
import BookComponent from "../components/BookComponent";
import {Icon, Layout, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import {QueryClient, useSuspenseQuery} from "@tanstack/react-query";
import {QueryConstants} from "../../di/QueryContants";
// import {RouteProp, useRoute} from "@react-navigation/native";
// import {RootStackParamList} from "../navigation/AppRootNav";
import {DiConstants, inject} from "../../di/di";
import {IPlacardsViewModel} from "../viewmodels/PlacardsViewModel";
import {IPlacardDetailViewModel, PlacardDetailViewModel} from "../viewmodels/PlacardDetailViewModel";


const placardDetailViewModel = inject<IPlacardDetailViewModel>(
    DiConstants.PLACARD_DETAIL_VIEW_MODEL
)
const PlacardDetailView = (
    { route, navigation }: { route: any, navigation:any },
    ) => {
    // const route = useRoute<RouteProp<RootStackParamList, 'PlacardDetailView'>>()
    // const id = route?.params?.id
    // const queryClient = route?.params?.queryClient
    const {id, queryClient} = route.params

    const BackIcon = (props:any) => (
        <Icon {...props} name='arrow-back' />
    );

    const accessoryLeft = () => (
        <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
    );

    const { data } = useSuspenseQuery({
        queryKey: [QueryConstants.GET_PLACARD_DETAIL],
        queryFn: () => placardDetailViewModel.getPlacardDetail(id)
        },
        queryClient
    )

    return (
        <Layout style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title={'PlacardDetailView'} accessoryLeft={accessoryLeft} alignment="center" />
                <View style={styles.container}>
                    <Text>
                        You clicked {id.toString()}
                    </Text>
                    <Button
                        onPress={() => Alert.alert('You need to implement delegate')}
                        title="Reset All"
                    />
                </View>
            </SafeAreaView>
        </Layout>
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
});

export default PlacardDetailView;
