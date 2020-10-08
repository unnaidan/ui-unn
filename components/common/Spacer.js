// @flow
import * as React from 'react'
import * as ReactNative from 'react-native'

const styles = ReactNative.StyleSheet.create({
    spacer: {
        flexGrow: 1
    }
})

const Spacer = () => (
    <ReactNative.View style={styles.spacer} />
)

export default Spacer