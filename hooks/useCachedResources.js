import * as React from 'react'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

const useCachedResources = () => {
    const [
        complete,
        setComplete
    ] = React.useState(false)

    React.useEffect(() => {
        loadFonts()
    }, [])

    const loadFonts = async () => {
        try {
            SplashScreen.preventAutoHideAsync()

            await Font.loadAsync({
                'Nunito-ExtraLight': require('./../assets/fonts/Nunito-ExtraLight.ttf'),
                'Nunito-ExtraLightItalic': require('./../assets/fonts/Nunito-ExtraLightItalic.ttf'),
                'Nunito-Light': require('./../assets/fonts/Nunito-Light.ttf'),
                'Nunito-LightItalic': require('./../assets/fonts/Nunito-LightItalic.ttf'),
                'Nunito-Regular': require('./../assets/fonts/Nunito-Regular.ttf'),
                'Nunito-Italic': require('./../assets/fonts/Nunito-Italic.ttf'),
                'Nunito-SemiBold': require('./../assets/fonts/Nunito-SemiBold.ttf'),
                'Nunito-SemiBoldItalic': require('./../assets/fonts/Nunito-SemiBoldItalic.ttf'),
                'Nunito-Bold': require('./../assets/fonts/Nunito-Bold.ttf'),
                'Nunito-BoldItalic': require('./../assets/fonts/Nunito-BoldItalic.ttf'),
                'Nunito-ExtraBold': require('./../assets/fonts/Nunito-ExtraBold.ttf'),
                'Nunito-ExtraBoldItalic': require('./../assets/fonts/Nunito-ExtraBoldItalic.ttf'),
                'Nunito-Black': require('./../assets/fonts/Nunito-Black.ttf'),
                'Nunito-BlackItalic': require('./../assets/fonts/Nunito-BlackItalic.ttf')
            })
        } catch (err) {
            //
        } finally {
            setComplete(true)
            SplashScreen.hideAsync()
        }
    }

    return complete;
}

export default useCachedResources