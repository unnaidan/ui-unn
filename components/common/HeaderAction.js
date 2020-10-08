// @flow
import * as React from 'react'
import { AntDesign } from '@expo/vector-icons'
import {
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native'

type Props = {
    icon: string
}

const styles = StyleSheet.create({
    icon: {
        color: '#353a3f'
    }
})

const HeaderAction = (props: Props) => {
    const {
        icon,
        ...other
    } = props

    return (
        <TouchableWithoutFeedback {...other}>
            <AntDesign
                name={icon}
                size={24}
                style={styles.icon}
            />
        </TouchableWithoutFeedback>
    )
}

export default HeaderAction