import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { Picker } from '@react-native-community/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { CULTURAS } from '../../utils/Culturas';
import { Colors, Fonts } from '../../theme/Theme';

import Item from './components/Item';
import Container from '../../components/Container/Container';


const PreviousAnalyzes: React.FC = () => {

    const [DATA, setData] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [value, setValue] = useState("");

    const getPreviousCulture = async () => {
        const cultureDATA = await AsyncStorage.getItem("@CulturasAnteriores");
        setData(JSON.parse(cultureDATA));
    }

    const handleFilterVisible = () => {
        setShowFilter(!showFilter);
    }

    useEffect(() => {
        // AsyncStorage.clear();
        getPreviousCulture();
    }, [])
    const listHeader = () => {
        return (
            <>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={handleFilterVisible}
                    style={styles.listHeaderContainer}
                >
                    {
                        !showFilter && (
                            <MaterialIcons name="filter-alt" size={24} color="black" />
                        )
                    }
                    <Text style={styles.listHeaderFilterTitle}>{showFilter ? "Apagar" : "Filtrar"}</Text>
                </TouchableOpacity>
                {
                    showFilter && (
                        <View
                            style={styles.inputContainer}>
                            <Picker
                                mode={"dropdown"}
                                selectedValue={value}
                                itemStyle={styles.inputElementLabel}
                                onValueChange={(itemValue: string, itemIndex) =>
                                    setValue(itemValue)
                                }>
                                <Picker.Item
                                    value={value}
                                    label="Selecione a Cultura"
                                    color={Colors.cinza}
                                />
                                {
                                    CULTURAS.map(item => (
                                        <Picker.Item
                                            key={item.title}
                                            color={Colors.cinza}
                                            label={item.title}
                                            value={item.title} />
                                    ))
                                }
                            </Picker>
                        </View>
                    )
                }
            </>
        )
    }

    const listEmpty = () => {
        return (
            <View style={styles.listEmptyContainer}>
                <Text style={styles.listEmptyLabel}>Sem analises anteriores</Text>
            </View>
        )
    }

    const _renderItem = ({ item }) => {
        return <Item dataItem={item} />
    }

    return (
        <Container
            backButton
            title='Análises anteriores'>
            <FlatList
                data={DATA ? DATA.filter(item => (
                    CULTURAS[item.cultureIndex].title.toLowerCase().includes(value.toLowerCase())
                )) :
                    DATA}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={listHeader}
                ListEmptyComponent={listEmpty}
                renderItem={_renderItem} />
        </Container>
    )
}

const styles = StyleSheet.create({
    listHeaderContainer: {
        paddingTop: 20,
        marginRight: 20,
        flexDirection: "row",
        alignSelf: "flex-end",
    },
    listHeaderFilterTitle: {
        fontSize: 16,
        marginBottom: 10,
        fontFamily: Fonts.Montserrat_700,
    },
    inputElementLabel: {
        fontSize: 14,
        fontFamily: Fonts.Montserrat_600,
    },
    inputContainer: {
        borderRadius: 10,
        marginHorizontal: 20,
        justifyContent: "center",
        backgroundColor: Colors.branco,
    },
    listEmptyContainer: {
        flex: 1,
        height: 250,
        alignItems: "center",
        marginHorizontal: 20,
        justifyContent: 'center',
    },
    listEmptyLabel: {
        fontSize: 24,
        fontFamily: Fonts.Montserrat_700,
    },
})

export default PreviousAnalyzes;