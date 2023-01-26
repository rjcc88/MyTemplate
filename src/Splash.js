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
    Button
} from "react-native"
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Splash = ({navigation}) => {

    const [loading, setLoading] = useState(false);

    setTimeout(()=>{navigation.navigate('Login')},2000)

    return(
        <SafeAreaView className="flex items-center absolute inset-0 justify-center ">
              <Icons
                                name='file-excel-box-outline'
                                color='#000000'
                                size={100}
                            />
                            <Text className="text-xl text-black">SPLASH LOGO HERE</Text>
        </SafeAreaView>
    )

}
    export default Splash;   