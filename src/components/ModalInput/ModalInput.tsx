import { AntDesign } from '@expo/vector-icons';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Modal, GestureResponderEvent } from 'react-native';

import { Colors, Fonts } from '../../theme/Theme';
import { CULTURAS } from '../../utils/Culturas';

type Props = {
    title: string;
    value: string;
    isVisible: boolean;
    setValue: Dispatch<SetStateAction<string>>;
    setIsVisible: Dispatch<SetStateAction<boolean>>;
    onPress: (event: GestureResponderEvent) => void;
    setIndexCultureSelected: Dispatch<SetStateAction<number>>;
}

const ModalInput = ({ title, value, isVisible, setIsVisible, setIndexCultureSelected, setValue, onPress }: Props) => {

    const handleCultureSelected = (name: string, index: number) => {
        setValue(name);
        setIndexCultureSelected(index);
        closeModal();
    }

    const closeModal = () => {
        setIsVisible(false);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleLabel}>{title}</Text>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.inputContainer}
                onPress={onPress}>
                <Text style={styles.inputValue}>{value}</Text>
                <AntDesign name="down" size={24} color={Colors.cinza_claro} />
            </TouchableOpacity>
            <Modal
                visible={isVisible}
                animationType={"slide"}
                onRequestClose={closeModal}>
                {
                    CULTURAS.map(item => (
                        <TouchableOpacity
                            key={item.title}
                            style={styles.itemContainer}
                            onPress={() => handleCultureSelected(item.title, Number(item.id))}>
                            <Text style={styles.itemLabel}>{item.title}</Text>
                        </TouchableOpacity>
                    )).sort()
                }
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    titleLabel: {
        fontSize: 16,
        marginBottom: 5,
        color: Colors.cinza,
        fontFamily: Fonts.Montserrat_700,
    },
    inputContainer: {
        height: 50,
        borderRadius: 8,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
        backgroundColor: Colors.branco,
        justifyContent: "space-between",
    },
    inputValue: {
        fontSize: 14,
        color: Colors.cinza_claro,
        fontFamily: Fonts.Montserrat_600,
    },
    itemContainer: {
        height: 70,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 16,
        alignItems: "center",
        marginHorizontal: 20,
        justifyContent: "center",
        borderColor: Colors.verder_escuro,
    },
    itemLabel: {
        fontSize: 18,
        color: Colors.verder_escuro,
        fontFamily: Fonts.Montserrat_700,
    },
})

export default ModalInput;