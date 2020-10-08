// @flow
import * as React from 'react'
import * as ReactNative from 'react-native'
import * as VectorIcons from '@expo/vector-icons'
import Text from './Text'
import theme from './../../contants/theme'

const { AntDesign } = VectorIcons
const {
    StyleSheet,
    View
} = ReactNative

type Props = {
    icon: string
}

const styles = StyleSheet.create({
    alert: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        backgroundColor: 'rgba(15, 76, 129, 0.08)'
    },
    alertContent: {
        color: theme.primary.main
    },
    icon: {
        marginRight: 16
    },
    text: {
        flex: 1
    }
})

const Alert = (props: Props) => {
    const {
        children,
        icon,
        style: propStyle,
        ...other
    } = props

    return (
        <View
            {...other}
            style={[
                styles.alert,
                propStyle
            ]}
        >
            {icon &&
                <AntDesign
                    name={icon}
                    size={24}
                    style={[
                        styles.alertContent,
                        styles.icon
                    ]}
                />
            }
            <Text
                category="p2"
                style={[
                    styles.alertContent,
                    styles.text
                ]}
            >
                {children}
            </Text>
        </View >
    )
}

export default Alert