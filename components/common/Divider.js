// @flow
import * as React from 'react'
import * as ReactNative from 'react-native'

const styles = ReactNative.StyleSheet.create({
    divider: {
        borderBottomWidth: ReactNative.StyleSheet.hairlineWidth,
        borderColor: '#E6E6E7'
    }
})

const Divider = ({ style }) => (
    <ReactNative.View style={[
        styles.divider,
        style
    ]} />
)

export default Divider