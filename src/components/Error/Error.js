import React from "react";
import AnimatedLottieView from "lottie-react-native";

function Error () {
    return <AnimatedLottieView source={require('../../assets/error.json')} autoPlay /> ;
}

export default Error;