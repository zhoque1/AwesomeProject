import React, { Suspense, useCallback, PropsWithChildren } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable, Button, Alert, SafeAreaView, ActivityIndicator,
} from 'react-native';
import BookComponent from "../components/BookComponent";
import {Icon, Layout, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import {QueryClient, QueryClientProvider, useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {DiConstants, inject} from "../../di/di";
import {IPlacardsViewModel} from "../viewmodels/PlacardsViewModel";
import {QueryConstants} from "../../di/QueryContants";
import {PlacardsResponse} from "../../domain/entities/PlacardsResponse";



const placardsViewModel = inject<IPlacardsViewModel>(
    DiConstants.PLACARDS_VIEW_MODEL
)

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true
        }
    }
})



const ScreenD = ({ navigation }: { navigation:any }) => {
    const page = React.useRef<number>(1)
    const [placardsResponse, setPlacardsResponse]
        = React.useState<PlacardsResponse>({data: []})
    const [hasMoreData, setHasMoreData] = React.useState(true);
    const BackIcon = (props:any) => (
        <Icon {...props} name='arrow-back' />
    );
    const accessoryLeft = () => (
        <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
    );

    const { data, refetch } = useSuspenseQuery({
        queryKey: [QueryConstants.GET_PLACARDS],
        queryFn: () => placardsViewModel.getPlacards(page.current, 10)
        },
        queryClient,
    )

    React.useEffect(() => {
        if((data?.placards?.length ?? 0) > 0){
            // console.log('placards ======= '+ JSON.stringify(data?.placards))
            if(page.current > 1){
                setPlacardsResponse({
                    data: [
                        ...(placardsResponse.data as []),
                        ...data!.placards!,
                    ]
                })
            } else {
                setPlacardsResponse({data: data!.placards})
            }
            page.current = page.current + 1
        } else {
            setHasMoreData(false)
        }
    }, [data])


    return (
        <Layout style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title={'Placards'} accessoryLeft={accessoryLeft} alignment="center" />
                <View style={styles.container}>
                    <Text>
                        Wait placards are loading
                    </Text>
                </View>

            </SafeAreaView>
        </Layout>
    )
}

const LoadingData = () => {
    return (
        <View>
            <ActivityIndicator size="large" />
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

export default ScreenD;
