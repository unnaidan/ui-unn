import React from 'react'
import { connect } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import {
    Explore,
    ForgotPassword,
    ForgotPasswordVerify,
    Home,
    Login,
    Profile,
    Register,
    RegisterVerify
} from './../screens'

const Tab = createBottomTabNavigator()
const AuthStack = createStackNavigator()
const HomeStack = createStackNavigator()
const ExploreStack = createStackNavigator()
const ProfileStack = createStackNavigator()

const options = {
    headerShown: false
}

const AauthStackScreen = () => (
    <AuthStack.Navigator initialRouteName="Login">
        <HomeStack.Screen name="Login" component={Login} options={options} />
        <HomeStack.Screen name="Register" component={Register} options={options} />
        <HomeStack.Screen name="RegisterVerify" component={RegisterVerify} options={options} />
        <HomeStack.Screen name="ForgotPassword" component={ForgotPassword} options={options} />
        <HomeStack.Screen name="ForgotPasswordVerify" component={ForgotPasswordVerify} options={options} />
    </AuthStack.Navigator>
)

const HomeStackScreen = () => (
    <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen name="Home" component={Home} options={options} />
    </HomeStack.Navigator>
)

const ExploreStackScreen = () => (
    <ExploreStack.Navigator initialRouteName="Explore">
        <ExploreStack.Screen name="Explore" component={Explore} options={options} />
    </ExploreStack.Navigator>
)

const ProfileStackScreen = () => (
    <ProfileStack.Navigator initialRouteName="Profile">
        <ProfileStack.Screen name="Profile" component={Profile} options={options} />
    </ProfileStack.Navigator>
)

const Navigator = props => {
    // if (props.user == null) {
    //     return <AauthStackScreen />
    // }

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                showLabel: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarIcon: props => (
                        <AntDesign {...props} name="home" />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(Navigator)
