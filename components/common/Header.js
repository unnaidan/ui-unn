// @flow
import * as React from 'react'
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'
import {
    StyleSheet,
    View
} from 'react-native'

const styles = StyleSheet.create({
    statusBar: {
        height: Constants.statusBarHeight
    },
    header: {
        position: 'relative',
        height: 44,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#e6e6e7'
    }
})

const Header = (props) => {
    const {
        children,
        style,
        ...other
    } = props

    return (
        <React.Fragment>
            <View style={styles.statusBar}></View>
            <StatusBar
                barStyle="default"
                translucent
            />
            <View
                {...other}
                style={[
                    styles.header,
                    style
                ]}
            >
                {children}
            </View>
        </React.Fragment>
    )
}

export default Header