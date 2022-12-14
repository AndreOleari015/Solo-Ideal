import React from 'react';
import { ImageBackground, StatusBar } from 'react-native';



const LoadingConfiguration: React.FC = () => {
    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={require("../../../assets/Splash.png")}>
            <StatusBar
                barStyle="default"
                backgroundColor="transparent"
                translucent />
        </ImageBackground>
    )
}

export default LoadingConfiguration;