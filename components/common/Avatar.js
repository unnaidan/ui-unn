// @flow
import * as React from 'react'
import * as ReactNative from 'react-native'

type Props = {
    size: 'tiny' | 'small' | 'medium' | 'large' | 'giant'
}

const styles = ReactNative.StyleSheet.create({
    avatar: {
        aspectRatio: 1,
        borderRadius: 100
    }
})

const sizes = ReactNative.StyleSheet.create({
    tiny: {
        width: 24,
        height: 24
    },
    small: {
        width: 32,
        height: 32
    },
    medium: {
        width: 40,
        height: 40
    },
    large: {
        width: 48,
        height: 48
    },
    giant: {
        width: 56,
        height: 56
    }
})

const Avatar = (props: Props) => {
    const {
        size,
        style: propStyle,
        ...other
    } = props

    const style = ReactNative.StyleSheet.compose(styles.avatar, sizes[size])

    return (
        <ReactNative.Image
            {...other}
            style={[
                style,
                propStyle
            ]}
        />
    )
}

Avatar.defaultProps = {
    size: 'medium'
}

export default Avatar