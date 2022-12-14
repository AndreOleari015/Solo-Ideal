import React from 'react';
import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';

import { useNavigation } from "@react-navigation/native";

import { Colors, Fonts } from '../../../../theme/Theme';
import { CulturaProps } from '../../../../utils/Culturas';

type Props = {
    data: CulturaProps;
}

const Item = ({ data }: Props) => {

    const navigation = useNavigation();

    const { title, imgUrl } = data;

    const handleDetailCultureScreen = () => {
        // navigation.navigate("DetailCulture", data);
    }

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.container}
            onPress={handleDetailCultureScreen}>
            <Image
                style={styles.img}
                source={imgUrl} />
            <View style={styles.cultureInfContainer}>
                <Text style={styles.complementLabel}>Nome</Text>
                <Text style={styles.cultureinfLabel}>{title}</Text>
            </View>
            <View style={styles.pointInfContainer}>
                <Text style={styles.complementLabel}>Pontuação</Text>
                <Text style={styles.cultureinfLabel}>6/7</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 75,
        borderRadius: 8,
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 20,
        paddingHorizontal: 15,
        backgroundColor: Colors.branco,
    },
    img: {
        width: 55,
        height: 55,
        marginRight: 10,
        borderRadius: 30,
    },
    cultureInfContainer: {
        flex: 1,
    },
    complementLabel: {
        fontSize: 14,
        color: Colors.cinza,
        fontFamily: Fonts.Montserrat_600,
    },
    cultureinfLabel: {
        fontSize: 21,
        fontFamily: Fonts.Montserrat_700,
    },
    pointInfContainer: {
        alignItems: "center",
    }
})

export default Item;