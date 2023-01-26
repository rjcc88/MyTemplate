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
    Button,
} from "react-native"

import { useDispatch } from 'react-redux'
import { setSignIn } from "../Services/api/Auth/Redux/authSlice";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({ navigation }) => {
    const number = 2500;
    

    const dispatch = useDispatch();

    const handleLogin = () => {
        const user = {
            isLoggedIn: false,
            email: 'jdoe@test.com',
            userName: 'johnDoe'
        };

        dispatch(setSignIn(user));
    }

    function layoutHeader() {
        return (
            <View className=" items-center flex  flex-row item-center">
                <View className="flex-auto">
                    <Icons
                        name='menu'
                        color='#000000'
                        size={25}
                    />
                </View>
                <View className="flex-auto">
                    <Text className="text-black text-lg">Dashboard</Text>
                </View>
                <View className="">
                    <Icons
                        name='bell-badge-outline'
                        color='#000000'
                        size={25}
                    />
                </View>

            </View>
        )
    }

    function layoutCardHeader() {
        return (
            <View className="border w-full h-28 mt-8 p-2 rounded-md">
                <View className="flex flex-row">
                    <View className="border">
                        <Icons name="account" size={100} color="gray" />
                    </View>
                    <View className="flex-col w-auto">
                        <View className="flex-row ml-2">
                            <Icons name="account-outline" size={20} color="gray" />
                            <Text className=" ml-1 text-black ">John Doe</Text>

                        </View>
                        <View className="flex-row ml-2 mt-1">
                            <Icons name="school-outline" size={20} color="gray" />
                            <Text className=" ml-2 text-black">Collage of Science - BSIT</Text>

                        </View>
                        <View className="flex-row ml-2 mt-1">
                            <Icons name="card-account-details-outline" size={20} color="gray" />
                            <Text className=" ml-2 text-black">1233-2212</Text>

                        </View>
                        <View className="flex-row ml-2 mt-1">
                            <Icons name="calendar-account-outline" size={20} color="gray" />
                            <Text className=" ml-2 text-black">Due: 2-10-2023</Text>

                        </View>

                    </View>
                </View>

            </View>
        )
    }

    function laoutbalance() {
        return (
            <View className="border w-auto h-20 mt-2 p-2 ml-4 mr-4 rounded-md">
                <View className="flex-row">
                    <Text className="text-black">Total Due Balance: </Text>
                    <Text></Text>
                </View>

                <View className="flex  mt-1 ">

                    <Text className="text-black justify-end text-right text-2xl">{new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(number)}</Text>
                </View>
            </View>
        )
    }

    function layoutPayNow() {
        return (
            <View className="mt-4">
                <TouchableOpacity className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 ml-4 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <Text className="text-center text-white">Pay Now</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function layoutPaymenHistory() {
        return (
            <View>
                <View className="items-center flex mt-6 ml-4 mr-4 mb-2 flex-row item-center">
                    <View className="flex-auto">
                        <Text className="text-black text-base">Payment History</Text>
                    </View>
                    <View className="">
                        <Icons name="filter-outline" size={24} color="gray" />
                    </View>
                </View>

                <View className="border w-auto h-auto mt-2 p-2 ml-4 mr-4 rounded-md">
                    <View className="flex-row items-center justify-between">
                    <Text className="text-black">Date: Janurary 10, 2023</Text>
                    <Text className="text-black text-lg text-left font-semibold">{new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(number)}</Text>
                    </View>
                  
                </View>
                <View className="border w-auto h-auto mt-2 p-2 ml-4 mr-4 rounded-md">
                <View className="flex-row items-center justify-between">
                    <Text className="text-black">Date: Janurary 10, 2023</Text>
                    <Text className="text-black text-lg text-left font-semibold">{new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(number)}</Text>
                    </View>
                </View>
                <View className="border w-auto h-auto mt-2 p-2 ml-4 mr-4 rounded-md">
                <View className="flex-row items-center justify-between">
                    <Text className="text-black">Date: Janurary 10, 2023</Text>
                    <Text className="text-black text-lg text-left font-semibold">{new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(number)}</Text>
                    </View>
                </View>
            </View>

        )
    }


    return (
        <SafeAreaView className="p-4">
            {/* {layoutHeader()} */}
            {layoutCardHeader()}
            {laoutbalance()}
            {layoutPayNow()}
            {layoutPaymenHistory()}
        </SafeAreaView>
    )

}
export default Home;   