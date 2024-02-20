import React, { Suspense, useCallback, PropsWithChildren } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable, Button, Alert, SafeAreaView,
} from 'react-native';
import BookComponent from "../components/BookComponent";
import {Icon, Layout, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import {QueryClient, QueryClientProvider, useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {DiConstants, inject} from "../../dada/module/di";
import {IPlacardsViewModel} from "../viewmodels/PlacardsViewModel";
import {QueryConstants} from "../../dada/module/QueryContants";



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
    const BackIcon = (props:any) => (
        <Icon {...props} name='arrow-back' />
    );
    const accessoryLeft = () => (
        <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
    );

    // const { isLoading, error, data } = useQuery({
    //     queryKey: ['repoData'],
    //     queryFn: () =>
    //         fetch('https://api.github.com/repos/TanStack/query').then((res) =>
    //             res.json(),
    //         ),
    // })

    const { data, refetch } = useSuspenseQuery({
        queryKey: [QueryConstants.GET_PLACARDS],
        queryFn: () => placardsViewModel.getPlacards(2, 10)
        },
        queryClient,
    )

    React.useEffect(() => {
        if((data?.placards?.length ?? 0) > 0){
            console.log('PageLength: ')
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
