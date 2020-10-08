import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
    DefaultTheme,
    NavigationContainer
} from '@react-navigation/native'
import {
    store,
    persistor
} from './redux/store'
import Navigation from './navigation'
import useCachedResources from './hooks/useCachedResources'

const theme = {
    ...DefaultTheme
}

theme.colors.background = '#fff'

export default function App() {
    const complete = useCachedResources()

    if (complete === false) {
        return null
    }

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <SafeAreaProvider>
                    <NavigationContainer theme={theme}>
                        <Navigation />
                    </NavigationContainer>
                </SafeAreaProvider>
            </PersistGate>
        </Provider>
    )
}