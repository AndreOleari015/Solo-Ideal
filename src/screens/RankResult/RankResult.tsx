import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { useRoute } from "@react-navigation/native";

import { CulturaProps } from '../../utils/Culturas';
import { Colors, Fonts } from '../../theme/Theme';

import Item from './components/Item/Item';
import Container from '../../components/Container/Container';


const RankResult: React.FC = () => {

    const route = useRoute();
    const DATA = route.params as Array<CulturaProps>;

    const ListHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerLabel}>De acordo com seus parametros, as melhores culturas para o seu solo são:</Text>
            </View>
        )
    }

    const ListEmpty = () => {
        return (
            <View style={styles.listEmptyContainer}>
                <Text style={styles.listEmptyLabel}>Nenhuma das culturas cadastradas pode ser plantada nesse solo, desculpe.</Text>
            </View>
        )
    }

    const _renderItem = ({ item }) => {
        return (
            <Item data={item} />
        )
    }

    return (
        <Container backButton title='Resultado'>
            <FlatList
                data={DATA}
                renderItem={_renderItem}
                keyExtractor={item => item.id}
                ListHeaderComponent={ListHeader}
                ListEmptyComponent={ListEmpty}
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        height: 180,
        width: "100%",
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.branco,
    },
    headerLabel: {
        fontSize: 16,
        flexWrap: "wrap",
        fontFamily: Fonts.Montserrat_600,
    },
    listEmptyContainer: {
        height: 300,
        alignItems: "center",
        paddingHorizontal: 20,
        justifyContent: "center",
    },
    listEmptyLabel: {
        fontSize: 16,
        color: Colors.cinza,
        fontFamily: Fonts.Montserrat_700,
    }
})

export default RankResult;