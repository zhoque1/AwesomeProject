import React, { Suspense, useCallback, PropsWithChildren } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable, Button, Alert, SafeAreaView, ActivityIndicator, TouchableOpacity, Animated,
} from 'react-native';
import {Icon, Layout, List, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import {QueryClient, QueryClientProvider, useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {DiConstants, inject} from "../../di/di";
import {IPlacardsViewModel} from "../viewmodels/PlacardsViewModel";
import {QueryConstants} from "../../di/QueryContants";
import Placard from "../../domain/models/Placard";
import Image = Animated.Image;



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



const PlacardsView = ({ navigation }: { navigation:any }) => {
    const page = React.useRef<number>(1)
    // console.log("1Current page ======================================= "+ page.current)
    const [placardsDataSource, setPlacardsDataSource]
        = React.useState<Placard[]>([])
    const list = React.useRef<List>(null);
    const [hasMoreData, setHasMoreData] = React.useState(true);
    const [isPending, startTransition] = React.useTransition();
    const BackIcon = (props:any) => (
        <Icon {...props} name='arrow-back' />
    );
    const accessoryLeft = () => (
        <TopNavigationAction icon={BackIcon} onPress={() => {
            queryClient.removeQueries({queryKey: [QueryConstants.GET_PLACARDS]})
            navigation.goBack()
        }} />
    );

    const { data, refetch } = useSuspenseQuery({
        queryKey: [QueryConstants.GET_PLACARDS],
        queryFn: () => placardsViewModel.getPlacards(page.current, 10)
        },
        queryClient,
    )

    React.useEffect(() => {
        // console.log("Current page ======================================= "+ page.current)
        // console.log("placardsDataSource ======================================= "+ JSON.stringify(placardsDataSource) )
        // console.log("data!.placards! ======================================= "+ JSON.stringify(data!.placards!) )
        // console.log("list state ======================================= "+ JSON.stringify(list?.current?.props?.data) )
        if((data?.placards?.length ?? 0) > 0){
            // console.log('placards ======= '+ JSON.stringify(data?.placards))
            // console.log("list state ======================================= "+ JSON.stringify(list?.current?.props?.data) )
            if(page.current > 1){
                // console.log("2Current page ======================================= "+ page.current)
                setPlacardsDataSource([
                    ...(placardsDataSource as []),
                    ...data!.placards!,
                ])
            } else {
                // console.log("3Current page ======================================= "+ page.current)
                // list?.current?.scrollToOffset({animated: true, offset: 0})
                // list?.current?.setState(null)
                // console.log("list state ======================================= "+ JSON.stringify(list?.current?.props?.data) )
                // data!.placards = []
                setPlacardsDataSource(data!.placards!)
            }

            page.current = page.current + 1
        } else {
            setHasMoreData(false)
        }
        // console.log("placardsDataSource = "+ placardsDataSource?.length)
    }, [data])

    function handleRefetch() {
        startTransition(() => {
            refetch();
        });
    }

    const renderPlacard = ({ item }: { item: Placard }) => {
        return (
            <TouchableOpacity
                key={item.id}
                style={[styles.shadowBox, { marginHorizontal: 16, marginBottom: 16}]}
                onPress={()=>{navigation.navigate('PlacardDetailView', {id: item.id, queryClient: queryClient})}}
                >
                <View style={[styles.card]}>
                    <Image
                        style={{ height: 230 }}
                        resizeMode="cover"
                        source={{ uri: item.download_url?? "" }}
                    />
                    <View style={{ margin: 16 }}>
                        <Text
                            style={{
                                marginTop: 10,
                                fontSize: 21,
                                fontWeight: '700',
                            }}>
                            {item.author}{item.id}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <Layout style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title={'Placards'} accessoryLeft={accessoryLeft} alignment="center" />
                <QueryClientProvider client={queryClient}>
                    <Suspense fallback={<LoadingData />}>

                        <View style={styles.container}>
                            {/*<Text>*/}
                            {/*    Wait placards are loading jkhgkjghkj kjhgkjgkjh jhgkjhgkjhgk kjhgkjhgkjhg*/}
                            {/*</Text>*/}
                            {/*<View*/}
                            {/*    style={{*/}
                            {/*        width: '100%',*/}
                            {/*        height: '15%',*/}
                            {/*        backgroundColor: 'powderblue',*/}
                            {/*    }}*/}
                            {/*/>*/}
                            {/*<View*/}
                            {/*    style={{*/}
                            {/*        width: '66%',*/}
                            {/*        height: '15%',*/}
                            {/*        backgroundColor: 'skyblue',*/}
                            {/*    }}*/}
                            {/*/>*/}
                            <List
                                ref={list}
                                style={{ backgroundColor: 'rgba(0,0,0,0)', width: '100%' }}
                                data={placardsDataSource}
                                renderItem={renderPlacard}
                                onEndReached={async () =>{
                                    hasMoreData && handleRefetch()
                                }}
                            />
                        </View>
                    </Suspense>
                </QueryClientProvider>
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
    shadowBox: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    card: {
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
    },
});

export default PlacardsView;
