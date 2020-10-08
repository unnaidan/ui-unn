// @flow
import * as React from 'react'
import * as ReactNative from 'react-native'
import theme from './../../contants/theme'

const {
    Text,
    TouchableWithoutFeedback,
    View
} = ReactNative

type Props = {
    appearance: 'filled' | 'ghost' | 'outline',
    disabled: boolean,
    size: 'small' | 'medium' | 'large'
}

const custom = {
    filled: {
        color: null
    },
    ghost: {
        color: null
    },
    outline: {
        color: null
    }
}

Object.keys(custom).map(type => {
    custom[type] = {
        color: type === 'filled'
            ? theme.primary.contrastText
            : theme.primary.main
    }
})

const styles = ReactNative.StyleSheet.create({
    buttonDisabled: {
        backgroundColor: '#f1f1f1'
    },
    button: {
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textDisabled: {
        color: '#9a9d9f'
    },
    text: {
        fontFamily: 'Nunito-Bold'
    }
})

const appearances = ReactNative.StyleSheet.create({
    filled: {
        backgroundColor: theme.primary.main
    },
    ghost: {
        //
    },
    outline: {
        borderWidth: 1,
        borderColor: theme.primary.main
    }
})

const sizes = ReactNative.StyleSheet.create({
    small: {
        height: 32,
        paddingHorizontal: 16
    },
    medium: {
        height: 40,
        paddingHorizontal: 24
    },
    large: {
        height: 48,
        paddingHorizontal: 32
    }
})

const textAppearances = ReactNative.StyleSheet.create(custom)
const textSizes = ReactNative.StyleSheet.create({
    small: {
        fontSize: 12
    },
    medium: {
        fontSize: 14
    },
    large: {
        fontSize: 16
    }
})

const Button = (props: Props) => {
    const {
        appearance,
        disabled,
        size,
        style: propStyle,
        ...other
    } = props

    return (
        <TouchableWithoutFeedback
            {...other}
            disabled={disabled}
        >
            <View style={[
                styles.button,
                appearances[appearance],
                sizes[size],
                propStyle,
                disabled && styles.buttonDisabled
            ]}>
                <Text style={[
                    styles.text,
                    textAppearances[appearance],
                    textSizes[size],
                    disabled && styles.textDisabled
                ]}>
                    {props.children}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

Button.defaultProps = {
    appearance: 'filled',
    disabled: false,
    size: 'medium'
}

export default Button