// @flow
import * as React from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import Header from './Header'
import HeaderAction from './HeaderAction'
import Text from './Text'

type Props = {
    onPressBack: () => void,
    title: string,
}

const styles = StyleSheet.create({
    title: {
        ...StyleSheet.absoluteFill,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const SimpleHeader = (props: Props) => {
    const {
        onPressBack,
        title
    } = props

    return (
        <Header>
            <View style={styles.title}>
                <Text category="h6">
                    {title}
                </Text>
            </View>
            {onPressBack &&
                <HeaderAction
                    icon="arrowleft"
                    onPress={onPressBack}
                />
            }
        </Header>
    )
}

export default SimpleHeader