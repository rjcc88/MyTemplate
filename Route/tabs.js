import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Svg, {
    Path
} from 'react-native-svg'
import { isIphoneX } from 'react-native-iphone-x-helper'

import { Home, About } from "../src"


// import { AnimatedTabBarNavigator, DotSize, TabElementDisplayOptions } from 'react-native-animated-nav-tab-bar'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const Tab = createBottomTabNavigator()

const Tab = AnimatedTabBarNavigator();

const TabBarCustomButton = ({ accessibilityLabel, accessibilityState, children, onPress }) => {

    var isSelected = accessibilityState.selected

    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View
                    style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        top: 0
                    }}
                >
                    <View style={{ flex: 1, backgroundColor: 'white' }}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={'white'}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: 'white' }}></View>
                </View>

                <TouchableOpacity
                    style={{
                        // top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        // tintColor: COLORS.newGreen,
                        // backgroundColor: COLORS.newGreen,
                        // ...styles.shadow
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                    height: 50,
                    backgroundColor: 'white'
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

const CustomTabBar = (props) => {
    if (isIphoneX()) {
        return (
            <View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 30,
                        backgroundColor: 'white'
                    }}
                ></View>
                <BottomTabBar {...props.props} />
            </View>
        )
    } else {
        return (
            <BottomTabBar {...props.props} />
        )
    }
}

const Tabs = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor: "white",
           
          }}
          
          appearance={{floating: true,
            activeTabBackgrounds: "#0f4863",
            shadow: true,
            
        }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                

                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name="home"
                            size={size ? size : 26}
                            color={focused ? color : "#222222"}
                            focused={focused}
                            // color={color}
                        />
                    )
                  }}
            />

            <Tab.Screen
                name="About"
                component={About}
              
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name="account"
                            size={size ? size : 24}
                            color={focused ? color : "#222222"}
                            focused={focused}
                            // color={color}
                        />
                    )
                  }}
            />
        </Tab.Navigator>
    )
}


export default Tabs;