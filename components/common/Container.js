// @flow
import * as React from 'react'
import * as ReactNative from 'react-native'

const styles = ReactNative.StyleSheet.create({
    container: {
        padding: 16
    }
})

const Container = (props) => {
    const {
        style,
        ...other
    } = props

    return (
        <ReactNative.View
            {...other}
            style={[
                styles.container,
                style
            ]}
        />
    )
}

export default Container