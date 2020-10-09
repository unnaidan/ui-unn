// @flow
import * as React from 'react'
import * as ReactNative from 'react-native'

type Props = {
    status: 'default' | 'hint',
    category: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 's1' | 's2' | 'p1' | 'p2' | 'caption'
}

const categories = ReactNative.StyleSheet.create({
    h1: {
        fontFamily: 'Nunito-Bold',
        fontSize: 36
    },
    h2: {
        fontFamily: 'Nunito-Bold',
        fontSize: 32
    },
    h3: {
        fontFamily: 'Nunito-Bold',
        fontSize: 30
    },
    h4: {
        fontFamily: 'Nunito-Bold',
        fontSize: 26
    },
    h5: {
        fontFamily: 'Nunito-Bold',
        fontSize: 22
    },
    h6: {
        fontFamily: 'Nunito-Bold',
        fontSize: 18
    },
    s1: {
        fontFamily: 'Nunito-Bold',
        fontSize: 16
    },
    s2: {
        fontFamily: 'Nunito-Bold',
        fontSize: 14
    },
    p1: {
        fontFamily: 'Nunito-Regular',
        fontSize: 16
    },
    p2: {
        fontFamily: 'Nunito-Regular',
        fontSize: 14
    },
    caption: {
        fontFamily: 'Nunito-Regular',
        fontSize: 12
    }
})

const statuses = ReactNative.StyleSheet.create({
    default: {
        color: '#353A3F'
    },
    hint: {
        color: '#9A9D9F'
    }
})

const StyledText = (props: Props) => {
    const {
        category,
        status,
        style: propStyle,
        ...other
    } = props

    const style = ReactNative.StyleSheet.compose(categories[category], statuses[status])

    return (
        <ReactNative.Text
            {...other}
            style={[
                style,
                propStyle
            ]}
        />
    )
}

StyledText.defaultProps = {
    category: 'p2',
    status: 'default'
}

export default StyledText