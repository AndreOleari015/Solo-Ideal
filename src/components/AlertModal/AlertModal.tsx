import React from 'react';
import { Modal, SafeAreaView, StyleSheet, Text, View, GestureResponderEvent, TouchableOpacity } from 'react-native';
import { Colors, Fonts } from '../../theme/Theme';


type Props = {
    message?: string;
    isVisible: boolean,
    setMesssage?: (event: string) => void,
    setModalVisible: (event: boolean) => void;
    onPress: (event: GestureResponderEvent) => void;
}
const AlertModal = ({ isVisible, message, setMesssage, setModalVisible, onPress }: Props) => {

    const closeModal = () => {
        setModalVisible(!isVisible);
        setMesssage("");
    }
    return (
        <Modal
            transparent
            animationType="fade"
            visible={isVisible}>
            <SafeAreaView
                style={styles.modalContainer}
            >
                <View style={styles.modalBoxContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalHeaderTitle}>AVISO!</Text>
                    </View>
                    <View style={styles.modalContent}>
                        <View style={styles.contentLabelContainer}>
                            <Text style={styles.contentLabel}>{message ? message : "Dados incompletos irão gerar resultados com menos precisão, deseja continuar?"}</Text>

                        </View>
                    </View>
                    <View style={[styles.footerContainer, message ? { justifyContent: "center" } : null]}>
                        <TouchableOpacity
                            onPress={closeModal}
                            style={styles.buttonContainer}
                        >
                            <Text style={styles.buttonLabel}>{message ? "OK" : "NÃO"}</Text>
                        </TouchableOpacity>
                        {
                            !message && (
                                <TouchableOpacity
                                    onPress={onPress}
                                    style={styles.buttonContainer}
                                >
                                    <Text style={styles.buttonLabel}>SIM</Text>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                </View>
            </SafeAreaView>
        </Modal >
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    modalBoxContent: {
        width: "60%",
        height: "30%",
        borderWidth: 1,
        borderRadius: 16,
        borderColor: Colors.preto,
        backgroundColor: Colors.verder_escuro,
    },
    modalHeader: {
        height: "20%",
        alignItems: "center",
        borderBottomWidth: 1,
        justifyContent: "center"
    },
    modalHeaderTitle: {
        fontSize: 26,
        color: Colors.branco,
        fontFamily: Fonts.Montserrat_700,
    },
    modalContent: {
        flex: 1,
        backgroundColor: Colors.branco,
    },
    contentLabelContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    contentLabel: {
        fontFamily: Fonts.Montserrat_700
    },
    footerContainer: {
        height: "17%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: Colors.branco,
    },
    buttonContainer: {
        width: 75,
        marginRight: 5,
    },
    buttonLabel: {
        fontSize: 14,
        textAlign: "center",
        fontFamily: Fonts.Montserrat_600,
    }
})

export default AlertModal;