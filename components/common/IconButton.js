// @flow
import * as React from 'react'
import * as ReactNative from 'react-native'
import * as VectorIcons from '@expo/vector-icons'
import theme from './../../contants/theme'

const { AntDesign } = VectorIcons
const {
    TouchableWithoutFeedback,
    View
} = ReactNative

type Props = {
    appearance: 'filled' | 'ghost' | 'outline',
    disabled: boolean,
    icon: string,
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
    button: {
        flexDirection: 'row',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#f1f1f1'
    },
    iconDisabled: {
        color: '#9a9d9f'
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
    }
})

const iconAppearances = ReactNative.StyleSheet.create(custom)
const iconSizes = ReactNative.StyleSheet.create({
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

const IconButton = (props: Props) => {
    const {
        appearance,
        disabled,
        icon,
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
                <AntDesign
                    name={icon}
                    style={[
                        iconAppearances[appearance],
                        iconSizes[size],
                        disabled && styles.iconDisabled
                    ]}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

IconButton.defaultProps = {
    appearance: 'filled',
    disabled: false,
    size: 'medium'
}

export default IconButton