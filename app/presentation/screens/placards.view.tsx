import React, {Suspense, useCallback, PropsWithChildren, memo} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable, Button, Alert, SafeAreaView, ActivityIndicator, TouchableOpacity, Animated, FlatList,
} from 'react-native';
import {Icon, Layout, List, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import {QueryClient, QueryClientProvider, useQuery, useQueryClient, useSuspenseQuery} from "@tanstack/react-query";
import {DiConstants, inject} from "../../di/di";
import {IPlacardsViewModel} from "../viewmodels/placards.viewmodel";
import {QueryConstants} from "../../di/query-contants";
import Placard from "../../domain/models/placard";
import Image = Animated.Image;
import Favorite from "../components/favorite";




const placardsViewModel = inject<IPlacardsViewModel>(
    DiConstants.PLACARDS_VIEW_MODEL
)



const PlacardsView = ({ navigation }: { navigation:any }) => {
    const queryClient = useQueryClient()
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

    // I commented this out because I'm using memo component took out of the return. look that one at below
    // const renderPlacard = ({ item }: { item: Placard }) => {
    //     return (
    //         <TouchableOpacity
    //             key={item.id}
    //             style={[styles.shadowBox, { marginHorizontal: 16, marginBottom: 16}]}
    //             onPress={()=>{navigation.navigate('PlacardDetailView', {id: item.id, queryClient: queryClient})}}
    //             >
    //             <View style={[styles.card]}>
    //                 <Image
    //                     style={{ height: 230 }}
    //                     resizeMode="cover"
    //                     source={{ uri: item.download_url?? "" }}
    //                 />
    //                 <View style={{ margin: 16 }}>
    //                     <Text
    //                         style={{
    //                             marginTop: 10,
    //                             fontSize: 21,
    //                             fontWeight: '700',
    //                         }}>
    //                         {item.author}{item.id}
    //                     </Text>
    //                 </View>
    //             </View>
    //         </TouchableOpacity>
    //     );
    // };

    return (
        <Layout style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title={'Placards'} accessoryLeft={accessoryLeft} alignment="center" />
                <Suspense fallback={<LoadingData />}>
                        <View style={styles.container}>
                            <FlatList
                                // ref={list}
                                style={{ backgroundColor: 'rgba(0,0,0,0)', width: '100%' }}
                                data={placardsDataSource}
                                renderItem={({item}) => <RenderPlacard item={item} navigation={navigation} />}
                                // renderItem={renderPlacard} I commented this out because I'm using memo component look that one in above
                                onEndReached={async () =>{
                                    hasMoreData && handleRefetch()
                                }}
                            />
                        </View>
                    </Suspense>
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

const RenderPlacard = memo(({ item , navigation}: { item: Placard, navigation: any }) => {
    return (
        <TouchableOpacity
            key={item.id}
            style={[styles.shadowBox, { marginHorizontal: 16, marginBottom: 16}]}
            onPress={()=>{navigation.navigate('PlacardDetailView', {id: item.id})}}
        >
            <View style={[styles.card]}>
                <Image
                    style={{ height: 230 }}
                    resizeMode="cover"
                    source={{ uri: item.download_url?? "" }}
                />
                <View style={{position: 'absolute', top: 10, right: 10}}>
                    <Favorite
                        k={item.id}
                    />
                </View>
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
}, (prevProps, nextProps) => { // and here is what i didn't notice before.
    return prevProps.item === nextProps.item;
});

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
