import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home_Screen from './src/components/screeners/HomeScreen';
import Detail_Screen from './src/components/screeners/DetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon_IonIcons from 'react-native-vector-icons/Ionicons';







const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions= {
        {
            headerStyle: {
                backgroundColor: "#D3DEAB"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold"
            }
        }
    } >
        <HomeStack.Screen 
            name="Home"
            component={Home_Screen} 
            options= {
                {
                    title: "Home Screen",
                    headerLeft: () => (
                        <Icon_IonIcons 
                            name="ios-menu"
                            size={25}
                            backgroundColor="#D3DEAB"
                            onPress={
                                () => navigation.openDrawer()
                            }
                            style={
                                {
                                    color: "#fff",
                                    marginLeft: 8,
                                }
                            }
                        />
                    )
                }
            }
        />
        </HomeStack.Navigator>
);

const DetailStackScreen = ({navigation}) => (
    <DetailStack.Navigator screenOptions= {
        {
            headerStyle: {
                backgroundColor: "#D3DEAB"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold"
            }
        }
    } >
        <DetailStack.Screen 
            name="Details"
            component={Detail_Screen}
            options= {
                {
                    title: "Detail Screen",
                    headerLeft: () => (
                        <Icon_IonIcons 
                            name="ios-menu"
                            size={25}
                            backgroundColor="#D3DEAB"
                            onPress={
                                () => navigation.openDrawer()
                            }
                            style={
                                {
                                    color: "#fff",
                                    marginLeft: 8,
                                }
                            }
                        />
                    )
                }
            }
        />
        </DetailStack.Navigator>
);

const App = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator 
                initialRouteName="Home">
                <Drawer.Screen 
                    name="Home"
                    component={HomeStackScreen}
                />
                <Drawer.Screen 
                    name="Details"
                    component={DetailStackScreen}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;

