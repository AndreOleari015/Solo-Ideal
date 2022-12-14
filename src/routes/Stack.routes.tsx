import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home/Home';
import About from '../screens/About/About';
import RankResult from '../screens/RankResult/RankResult';
import NewAnalyses from '../screens/NewAnalyses/NewAnalyses';
import PreviousAnalyzes from '../screens/PreviousAnalyzes/PreviousAnalyzes';
import DetailCulture from '../screens/DetailCulture/DetailCulture';

const Stack = createNativeStackNavigator();

const StackRoute: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                statusBarTranslucent: true
            }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='NewAnalyses' component={NewAnalyses} />
            <Stack.Screen name='PreviousAnalyzes' component={PreviousAnalyzes} />
            <Stack.Screen name='About' component={About} />
            {/* <Stack.Screen name='RankResult' component={RankResult} /> */}
            <Stack.Screen name='DetailCulture' component={DetailCulture} />
        </Stack.Navigator>
    )
}

export default StackRoute;