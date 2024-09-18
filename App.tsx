/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from "@ui-kitten/components";
import {EvaIconsPack} from "@ui-kitten/eva-icons";
import AppRootNav from "./app/presentation/navigation/app-root-nav";
import {QueryClient, QueryClientProvider, useQuery, useSuspenseQuery} from "@tanstack/react-query";
// import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 300000, // 5 minutes cache
            suspense: true,
        }
    }
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
        {/*<BottomSheetModalProvider>*/}
            <ApplicationProvider {...eva} theme={eva.light}>
                <IconRegistry icons={EvaIconsPack} />
                <AppRootNav />
            </ApplicationProvider>
        {/*</BottomSheetModalProvider>*/}
    </QueryClientProvider>
  );
};

export default App;
