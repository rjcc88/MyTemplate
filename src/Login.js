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
import { ScrollView, TextInput } from "react-native-gesture-handler";

import { useDispatch } from 'react-redux'
import { setSignIn } from "../Services/api/Auth/Redux/authSlice";
import { useForm, Controller } from "react-hook-form";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = ({ navigation }) => {
    const [showPassword, setShowPassword] = React.useState(false)

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            password: '',
        }
    });

    const dispatch = useDispatch();

    const handleLogin = () => {
        const user = {
            isLoggedIn: true,
            email: 'jdoe@test.com',
            userName: 'johnDoe'
        };

        dispatch(setSignIn(user));
    }

    function loginForm() {
        return (
            <View className="p-2">
                <Text className="font-semibold text-black text-lg">Welcome!</Text>
                <Text className="text-xs dark:text-black">Enter your Email and Password</Text>

                <View className="mt-4">
                    <Text className={errors.username ? "block mb-2 text-sm font-medium text-red-700 dark:text-red-500" : "block mb-1 text-sm font-medium text-gray-900 dark:text-black"}>Email</Text>
                    <View className="flex-row">
                        <View className=" pl-3 pt-3 pointer-events-none inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <Icons
                                name='email-outline'
                                color='#000000'
                                size={20}
                            />
                        </View>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View className="flex-auto">
                                    <TextInput
                                        className={errors.username ? " bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-r-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" : " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        placeholder="Enter Email"
                                        placeholderTextColor={'gray'}
                                        selectionColor={'black'}
                                        textAlign="left"
                                    />
                                </View>

                            )}
                            name="username"
                        />
                        {errors.username && <Text className="absolute pt-14 text-sm text-red-600 dark:text-red-500 font-medium">This field is required.</Text>}
                    </View>
                </View>

                <View className="mt-4">
                    <Text className={errors.password ? "block mb-2 text-sm font-medium text-red-700 dark:text-red-500" : "block mb-2 text-sm font-medium text-gray-900 dark:text-black"}>Password</Text>
                    <View className="mb-6 flex-row">
                        <View className=" pt-3 items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <Icons
                                name='key-outline'
                                color='#000000 dark:#ffffff'
                                size={20}
                            />
                        </View>
                
                    <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View className="flex-auto">
                                    <TextInput className={errors.username ? "bg-red-50 border w-full border-red-500 text-red-900 placeholder-red-700 text-sm rounded-r-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" : " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                                        textAlign="left"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        placeholder="Password"
                                        placeholderTextColor={'gray'}
                                        selectionColor={'black'}
                                        secureTextEntry={!showPassword}
                                    />
                                </View>
                            )}
                            name="password"
                        />

                        <TouchableOpacity
                            className="text-white absolute right-2.5 bottom-2.5 px-4 py-.5"
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            {
                                showPassword ? <Icons
                                    name='eye-off'
                                    color='#000000'
                                    size={25}
                                /> :
                                    <Icons
                                        name='eye'
                                        color='#000000'
                                        size={25}
                                    />
                            }
                        </TouchableOpacity>
                 
                      
                        {errors.password && <Text className="absolute pt-14 text-sm text-red-600 dark:text-red-500 font-medium">This field is required.</Text>}
                    </View>

                </View>


            </View>
        )

    }

    function formButton(){
        return(
            <View className="p-2">

            <TouchableOpacity  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onPress={handleLogin}>
                    <Text className="text-center text-white text-base">Sign In</Text>
            </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView className="flex-1">
            <ScrollView className="">
            {loginForm()}
            {formButton()}
            </ScrollView>
         
            <View>
            <Text className="text-black text-center mb-2">Copyrights @ 2023</Text>
            </View>
        
          </SafeAreaView>
    )

}
export default Login;   