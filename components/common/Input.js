// @flow
import * as React from 'react'
import * as ReactNative from 'react-native'

type Props = {
    size: 'small' | 'medium' | 'large'
}

const styles = ReactNative.StyleSheet.create({
    input: {
        fontFamily: 'Nunito-Regular',
        fontSize: 14,
        borderBottomWidth: 1,
        borderColor: '#e6e6e7',
        color: '#353a3f'
    }
})

const sizes = ReactNative.StyleSheet.create({
    small: {
        height: 32
    },
    medium: {
        height: 40
    },
    large: {
        height: 48
    }
})

const StyledTextInput = (props: Props) => {
    const {
        size,
        style: propStyle,
        ...other
    } = props

    const style = ReactNative.StyleSheet.compose(styles.input, sizes[size])

    return (
        <ReactNative.TextInput
            {...other}
            placeholderTextColor="#9a9d9f"
            style={[
                style,
                propStyle
            ]}
        />

    )
}

StyledTextInput.defaultProps = {
    size: 'medium'
}

export default StyledTextInput