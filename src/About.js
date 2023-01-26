import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    Alert,
    BackHandler,
    ToastAndroid,
} from "react-native"

const About = ({ navigation }) => {

    return(
        <SafeAreaView className="flex text-xl absolute inset-0 justify-center">
            <Text className="text-center">About</Text>
        </SafeAreaView>
    )

}
    export default About;   