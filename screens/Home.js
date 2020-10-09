import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View
} from 'react-native'
import {
    Alert as AlertComponent,
    Avatar,
    Container,
    Divider,
    Input,
    SimpleHeader,
    Text
} from './../components/common'

const styles = StyleSheet.create({
    title: {
        marginTop: 32,
        marginBottom: 8
    },
    subtitle: {
        marginTop: 16,
        marginBottom: 8
    },
    item: {
        marginVertical: 8
    },
    horizontals: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: -8
    },
    horizontal: {
        margin: 8
    }
})

const Home = props => {
    return (
        <React.Fragment>
            <SimpleHeader title="Нүүр" />
            <ScrollView keyboardShouldPersistTaps="handled">
                <SafeAreaView>
                    <Container>
                        <Text
                            category="s1"
                            style={styles.title}
                        >
                            Typography
                        </Text>
                        <Text
                            category="s2"
                            status="hint"
                            style={styles.subtitle}
                        >
                            Category
                        </Text>
                        <Text category="h1">
                            H1
                        </Text>
                        <Text category="h2">
                            H2
                        </Text>
                        <Text category="h3">
                            H3
                        </Text>
                        <Text category="h4">
                            H4
                        </Text>
                        <Text category="h5">
                            H5
                        </Text>
                        <Text category="h6">
                            H6
                        </Text>
                        <Text category="s1">
                            S1
                        </Text>
                        <Text category="s2">
                            S2
                        </Text>
                        <Text category="p1">
                            P1
                        </Text>
                        <Text category="p2">
                            P2
                        </Text>
                        <Text category="caption">
                            caption
                        </Text>
                        <Text
                            category="s1"
                            style={styles.title}
                        >
                            Alert
                        </Text>
                        <Text
                            category="s2"
                            status="hint"
                            style={styles.subtitle}
                        >
                            Icon
                        </Text>
                        <AlertComponent
                            icon="bells"
                            style={styles.item}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </AlertComponent>
                        <Text
                            category="s1"
                            style={styles.title}
                        >
                            Avatar
                        </Text>
                        <Text
                            category="s2"
                            status="hint"
                            style={styles.subtitle}
                        >
                            Size
                        </Text>
                        <View style={styles.horizontals}>
                            <Avatar
                                size="tiny"
                                style={styles.horizontal}
                                source={require('./../assets/images/avatar.jpg')}
                            />
                            <Avatar
                                size="small"
                                style={styles.horizontal}
                                source={require('./../assets/images/avatar.jpg')}
                            />
                            <Avatar
                                size="medium"
                                style={styles.horizontal}
                                source={require('./../assets/images/avatar.jpg')}
                            />
                            <Avatar
                                size="large"
                                style={styles.horizontal}
                                source={require('./../assets/images/avatar.jpg')}
                            />
                            <Avatar
                                size="giant"
                                style={styles.horizontal}
                                source={require('./../assets/images/avatar.jpg')}
                            />
                        </View>
                        <Text
                            category="s1"
                            style={styles.title}
                        >
                            Divider
                        </Text>
                        <Divider style={styles.item} />
                        <Text
                            category="s1"
                            style={styles.title}
                        >
                            Input
                        </Text>
                        <Text
                            category="s2"
                            status="hint"
                            style={styles.subtitle}
                        >
                            Size
                        </Text>
                        <Input
                            style={styles.item}
                            placeholder="Small"
                            size="small"
                        />
                        <Input
                            style={styles.item}
                            placeholder="Medium"
                            size="medium"
                        />
                        <Input
                            style={styles.item}
                            placeholder="Large"
                            size="large"
                        />
                    </Container >
                </SafeAreaView >
            </ScrollView >
        </React.Fragment >
    )
}

export default Home