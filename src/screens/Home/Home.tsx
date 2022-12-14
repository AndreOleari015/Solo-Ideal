import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';
import AsyncStorage from "@react-native-async-storage/async-storage";

import Container from '../../components/Container/Container';
import Button from './components/Button';



const Home: React.FC = () => {

    const navigation = useNavigation();

    const handleAboutScreen = () => {
        navigation.navigate('About');
    }
    const handleNewAnalysesScreen = () => {
        navigation.navigate('NewAnalyses');
    }
    const handlePreviousAnalyzesScreen = () => {
        navigation.navigate('PreviousAnalyzes');
    }

    useEffect(() => {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        AsyncStorage.clear();
    }, [])
    return (
        <Container
            onPress={handleAboutScreen}>
            <View style={styles.container}>
                <Button
                    title='Nova Análise'
                    onPress={handleNewAnalysesScreen} />
                <Button
                    title='Análises Anteriores'
                    onPress={handlePreviousAnalyzesScreen} />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 20,
        justifyContent: "center",
    }
})

export default Home;