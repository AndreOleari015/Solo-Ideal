import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts } from '../../theme/Theme';
import { useNavigation } from '@react-navigation/native';

type Props = TouchableOpacityProps & {
    title?: string,
    backButton?: boolean,
    children: React.ReactNode,
}

const Container = ({ children, title = "SOLO IDEAL", backButton = false, ...rest }: Props) => {

    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.headerContainer}>
                {
                    !backButton ?
                        <>
                            <Text style={styles.headerTitle}>{title}</Text>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.iconContainer}
                                {...rest}
                            >
                                <AntDesign name="infocirlceo" size={30} color={Colors.branco} />
                            </TouchableOpacity>
                        </>
                        :
                        <>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.iconBackContainer}
                                onPress={handleGoBack}
                            >
                                <AntDesign name="left" size={30} color={Colors.branco} />
                            </TouchableOpacity>
                            <Text style={styles.headerTitle}>{title}</Text>
                        </>
                }
            </SafeAreaView>
            {children}
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.verde_sec,
    },
    headerContainer: {
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
        backgroundColor: Colors.verder_escuro,
    },
    headerTitle: {
        flex: 1,
        fontSize: 21,
        marginLeft: 10,
        // paddingBottom: 10,
        alignItems: "center",
        color: Colors.branco,
        fontFamily: Fonts.Montserrat_700,
    },
    iconContainer: {
        padding: 10,
        marginRight: -10,
    },
    iconBackContainer: {
        paddingVertical: 10,
    }
})

export default Container;