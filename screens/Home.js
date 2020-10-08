import React from 'react'
import {
    Alert,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View
} from 'react-native'
import {
    Alert as AlertComponent,
    Avatar,
    Button,
    Container,
    Divider,
    IconButton,
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
                        <Text
                            category="s1"
                            style={styles.title}
                        >
                            Button
                        </Text>
                        <Text
                            category="s2"
                            status="hint"
                            style={styles.subtitle}
                        >
                            Size
                        </Text>
                        <Button
                            size="small"
                            style={styles.item}
                            onPress={() => Alert.alert('Small Button')}
                        >
                            Button
                        </Button>
                        <Button
                            size="medium"
                            style={styles.item}
                            onPress={() => Alert.alert('Medium Button')}
                        >
                            Button
                        </Button>
                        <Button
                            size="large"
                            style={styles.item}
                            onPress={() => Alert.alert('Large Button')}
                        >
                            Button
                        </Button>
                        <Text
                            category="s2"
                            status="hint"
                            style={styles.subtitle}
                        >
                            Appearance
                        </Text>
                        <Button
                            appearance="filled"
                            size="medium"
                            style={styles.item}
                            onPress={() => Alert.alert('Medium Button')}
                        >
                            Button
                        </Button>
                        <Button
                            appearance="outline"
                            size="medium"
                            style={styles.item}
                            onPress={() => Alert.alert('Medium Button')}
                        >
                            Button
                        </Button>
                        <Button
                            appearance="ghost"
                            size="medium"
                            style={styles.item}
                            onPress={() => Alert.alert('Medium Button')}
                        >
                            Button
                        </Button>
                        <Text
                            category="s2"
                            status="hint"
                            style={styles.subtitle}
                        >
                            Disabled
                        </Text>
                        <Button
                            size="medium"
                            style={styles.item}
                            onPress={() => Alert.alert('Medium Button')}
                            disabled
                        >
                            Button
                        </Button>
                        <Text
                            category="s1"
                            style={styles.title}
                        >
                            Icon Button
                        </Text>
                        <Text
                            category="s2"
                            status="hint"
                            style={styles.subtitle}
                        >
                            Size
                        </Text>
                        <View style={styles.horizontals}>
                            <IconButton
                                icon="close"
                                size="small"
                                style={styles.horizontal}
                                onPress={() => Alert.alert('Small Button')}
                            />
                            <IconButton
                                icon="close"
                                size="medium"
                                style={styles.horizontal}
                                onPress={() => Alert.alert('Medium Button')}
                            />
                            <IconButton
                                icon="close"
                                size="large"
                                style={styles.horizontal}
                                onPress={() => Alert.alert('Large Button')}
                            />
                        </View>
                        <Text
                            category="s2"
                            status="hint"
                            style={styles.subtitle}
                        >
                            Appearance
                        </Text>
                        <View style={styles.horizontals}>
                            <IconButton
                                appearance="filled"
                                icon="close"
                                size="medium"
                                style={styles.horizontal}
                                onPress={() => Alert.alert('Medium Button')}
                            />
                            <IconButton
                                appearance="outline"
                                icon="close"
                                size="medium"
                                style={styles.horizontal}
                                onPress={() => Alert.alert('Medium Button')}
                            />
                            <IconButton
                                appearance="ghost"
                                icon="close"
                                size="medium"
                                style={styles.horizontal}
                                onPress={() => Alert.alert('Medium Button')}
                            />
                        </View>
                        <Text
                            category="s2"
                            status="hint"
                            style={styles.subtitle}
                        >
                            Disabled
                        </Text>
                        <IconButton
                            icon="close"
                            size="medium"
                            style={styles.item}
                            onPress={() => Alert.alert('Medium Button')}
                            disabled
                        />
                    </Container >
                </SafeAreaView >
            </ScrollView >
        </React.Fragment >
    )
}

export default Home