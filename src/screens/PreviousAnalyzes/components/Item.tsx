import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Fonts } from '../../../theme/Theme';
import { CULTURAS } from '../../../utils/Culturas';

interface ItemProps {
    dataItem: {
        MO: number,
        boro: number,
        calcio: number,
        cobre: number,
        cultureIndex: number,
        date_hours: string,
        enxofre: number,
        ferro: number,
        fosforo: number,
        imgUrl: string,
        magnesio: number,
        manganes: number,
        pH: number,
        potassio: number,
    }
}

const Item = ({ dataItem }: ItemProps) => {

    const navigation = useNavigation();

    const { cultureIndex, ...props } = dataItem;
    const cultureDATA = CULTURAS[cultureIndex];
    const { color, imgUrl, title } = cultureDATA;

    const dateCreatedAt = [props.date_hours.split("T")[0].split("-")[2], "-", props.date_hours.split("T")[0].split("-")[1], , "-", props.date_hours.split("T")[0].split("-")[0]];
    const hourCreatedAt = [props.date_hours.split("T")[1].split(".")[0]];

    console.log(dataItem);

    const handleDetailScreen = () => {
        navigation.navigate("DetailCulture", { cultureIndex, userInserData: { ...props } })
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.container}
            onPress={handleDetailScreen}>
            <View style={[styles.colorContainer, { backgroundColor: color }]} />
            <View style={styles.infoContainer}>
                <Text style={styles.infotitleLabel}>{title}</Text>
                <Text style={styles.infoDateLabel}>{dateCreatedAt}</Text>
            </View>
            <View style={styles.imgContainer}>
                <LinearGradient
                    start={{ x: 0.1, y: 1 }}
                    end={{ x: 2.3, y: 1 }}
                    style={styles.linearContainer}
                    colors={[Colors.branco, Colors.transparent, Colors.transparent, Colors.transparent]} />
                <Image
                    style={styles.img}
                    source={imgUrl}
                    borderTopRightRadius={16}
                    borderBottomRightRadius={16}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        marginTop: 20,
        borderRadius: 16,
        flexDirection: "row",
        marginHorizontal: 20,
        justifyContent: "center",
        backgroundColor: Colors.branco,
    },
    colorContainer: {
        width: "3%",
        marginRight: 5,
        borderTopLeftRadius: 16,
        borderBottomStartRadius: 16,
    },
    infoContainer: {
        flex: 1,
        justifyContent: "center"
    },
    infotitleLabel: {
        fontSize: 16,
        fontFamily: Fonts.Montserrat_700
    },
    infoDateLabel: {
        fontSize: 12,
        fontFamily: Fonts.Montserrat_600,
        color: Colors.cinza_claro
    },
    imgContainer: {
        width: "50%",
        flexDirection: "row",
        borderRadius: 16,
    },
    linearContainer: {
        height: "100%",
        width: "100%",
        zIndex: 1,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,

    },
    img: {
        width: "100%",
        height: "100%",
        marginLeft: "-100%",
        // borderBottomEndRadius: 16,
        // borderBottomLeftRadius: 16,
    }
})

export default Item;