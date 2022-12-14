import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

import { useRoute, useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Colors, Fonts } from '../../theme/Theme';
import { DetailCultureProps } from '../../@types/navigation';
import { CulturaProps, CULTURAS } from '../../utils/Culturas';

import Button from '../../components/Button/Button';


const DetailCulture: React.FC = () => {

    const route = useRoute();
    const navigation = useNavigation();
    const { cultureIndex, userInserData } = route.params as DetailCultureProps;
    const { pH, MO, boro, calcio, cobre, enxofre, ferro, fosforo, magnesio, manganes, potassio } = userInserData;

    const cultureData = CULTURAS[cultureIndex] as CulturaProps;

    const { imgUrl, title, params } = cultureData;
    const date_hours = new Date();
    
    const DETAILDATA = [
        {
            title: "pH",
            valor_atual: pH,
            valor_adequado: params.pH,
        },
        {
            title: "P",
            valor_atual: fosforo,
            valor_adequado: params.fosforo,
        },
        {
            title: "K",
            valor_atual: potassio,
            valor_adequado: params.potassio,
        },
        {
            title: "Ca",
            valor_atual: calcio,
            valor_adequado: params.calcio,
        },
        {
            title: "Mg",
            valor_atual: magnesio,
            valor_adequado: params.magnesio,
        },
        {
            title: "S",
            valor_atual: enxofre,
            valor_adequado: params.enxofre,
        },
        {
            title: "M.O.",
            valor_atual: MO,
            valor_adequado: params.MO,
        },
        {
            title: "Mn",
            valor_atual: manganes,
            valor_adequado: params.manganes,
        },
        {
            title: "Fe",
            valor_atual: ferro,
            valor_adequado: params.ferro,
        },
        {
            title: "B",
            valor_atual: boro,
            valor_adequado: params.boro,
        },
        {
            title: "pH",
            valor_atual: pH,
            valor_adequado: params.pH,
        },
        {
            title: "Cu",
            valor_atual: cobre,
            valor_adequado: params.cobre,
        },
    ]

    const handleSave = async () => {
        const myArray = [{ cultureIndex, pH, MO, boro, calcio, cobre, enxofre, ferro, fosforo, magnesio, manganes, potassio, imgUrl, date_hours }];
        const cultureStrings = await AsyncStorage.getItem('@CulturasAnteriores');
        if (cultureStrings) {
            const culturePrevious = JSON.parse(cultureStrings);
            culturePrevious.push({ cultureIndex, pH, MO, boro, calcio, cobre, enxofre, ferro, fosforo, magnesio, manganes, potassio, imgUrl, date_hours });
            await AsyncStorage.setItem('@CulturasAnteriores', JSON.stringify(culturePrevious));
            navigation.reset({
                routes: [{ name: 'Home' }]
            });
        } else {
            await AsyncStorage.setItem('@CulturasAnteriores', JSON.stringify(myArray));
            navigation.reset({
                routes: [{ name: 'Home' }]
            });
        }
    }

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.img}
                source={imgUrl}
            />
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={handleGoBack}
                style={styles.headerContainer}>
                <AntDesign name="left" size={32} color={Colors.branco} />
                <Text style={styles.titleLabel}>{title}</Text>
            </TouchableOpacity>

            {
                DETAILDATA.map((item, index) => (
                    <View
                        key={index}
                        style={styles.itemContainer}>
                        <View style={{ flex: 1 }}>
                            <View style={styles.itemContentContainer}>
                                <Text style={styles.itemLabel}>{item.title}</Text>
                                <Text style={styles.itemValueLabel}>
                                    {item.valor_atual >= item.valor_adequado[0] && item.valor_atual <= item.valor_adequado[1] ?
                                        "Adequado" :
                                        "Inadequado"}
                                </Text>
                            </View>
                            <View style={styles.itemContentContainer}>
                                <Text style={styles.itemLabel}>Valor Atual</Text>
                                <Text style={styles.itemValueLabel}>{item.valor_atual.toString().replace(".", ",")}</Text>
                            </View>
                            <View style={styles.itemContentContainer}>
                                <Text style={styles.itemLabel}>Valor adequado</Text>
                                <Text style={styles.itemValueLabel}>
                                    {item.valor_adequado[0].toString().replace(".", ",")} a {item.valor_adequado[1].toString().replace(".", ",")}
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.colorIndicator, item.valor_atual >= item.valor_adequado[0] && item.valor_atual <= item.valor_adequado[1] ?
                            { backgroundColor: Colors.verde_claro } :
                            { backgroundColor: Colors.vermelho }]} />
                    </View>
                ))
            }
            <View style={styles.buttonContainer}>
                <Button
                    onPress={handleSave}
                    title='Salvar' />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.verde_sec
    },
    img: {
        width: "100%",
        height: 300,
        marginBottom: -20,
    },
    headerContainer: {
        top: 40,
        left: 20,
        alignItems: "center",
        position: "absolute",
        flexDirection: 'row',
    },
    titleLabel: {
        fontSize: 24,
        color: Colors.branco,
        fontFamily: Fonts.Montserrat_700,
    },
    itemContainer: {
        borderRadius: 8,
        marginBottom: 20,
        flexDirection: "row",
        marginHorizontal: 20,
        backgroundColor: Colors.branco,
    },
    itemContentContainer: {
        alignItems: "center",
        flexDirection: "row",
    },
    itemLabel: {
        flex: 1,
        paddingLeft: 10,
        paddingVertical: 5,
        color: Colors.preto,
        fontFamily: Fonts.Montserrat_700,
    },
    itemValueLabel: {
        paddingRight: 10,
        color: Colors.cinza,
        fontFamily: Fonts.Montserrat_600,
    },
    colorIndicator: {
        width: 20,
        height: "100%",
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    buttonContainer: {
        marginBottom: 20,
        marginHorizontal: 60,
    }
})

export default DetailCulture;