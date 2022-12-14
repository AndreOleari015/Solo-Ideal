import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';

import { Colors, Fonts } from '../../theme/Theme';
import { useNavigation } from "@react-navigation/native";

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import ModalInput from '../../components/ModalInput/ModalInput';



const NewAnalyses: React.FC = () => {

    const navigation = useNavigation();

    const [P, setP] = useState("");
    const [K, setK] = useState("");
    const [pH, setPH] = useState("");
    const [Ca, setCa] = useState("");
    const [Mg, setMg] = useState("");
    const [S, setS] = useState("");
    const [B, setB] = useState("");
    const [Cu, setCu] = useState("");
    const [Fe, setFe] = useState("");
    const [Mn, setMn] = useState("");
    const [MO, setMO] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [cultura, setCultura] = useState("Selecione a cultura");
    const [indexCultureSelected, setIndexCultureSelected] = useState(0);

    const handleModalVisible = () => {
        setModalVisible(!modalVisible);
    }

    const handleDetilsCuture = () => {
        navigation.navigate("DetailCulture", {
            cultureIndex: indexCultureSelected,
            userInserData: {
                fosforo: Number(P.replace(",", ".")),
                potassio: Number(K.replace(",", ".")),
                pH: Number(pH.replace(",", ".")),
                calcio: Number(Ca.replace(",", ".")),
                magnesio: Number(Mg.replace(",", ".")),
                boro: Number(B.replace(",", ".")),
                cobre: Number(Cu.replace(",", ".")),
                ferro: Number(Fe.replace(",", ".")),
                manganes: Number(Mn.replace(",", ".")),
                enxofre: Number(S.replace(",", ".")),
                MO: Number(MO.replace(",", "."))
            }
        });
    }

    const handleDoAnalysis = () => {
        try {
            if (cultura.includes("Selecione")) {
                Alert.alert("Aviso!", "Preencha os dados necessarios")
            } else if (P == "" || K == "" || pH == "" || Ca == "" || Mg == "" || B == "" || Cu == "" || Fe == "" || Mn == "" || S == "" || MO == "" || cultura.includes("cultura")) {
                Alert.alert("Aviso!", "Dados incompletos irão gerar resultados com menos precisão, deseja continuar?", [
                    {
                        text: "NÃO",
                        style: "cancel"
                    },
                    {
                        text: "SIM",
                        onPress: () => handleDetilsCuture()
                    }
                ])
            } else {
                handleDetilsCuture();
            }
        } catch (error) {
            console.log(error)
        } finally {
            setModalVisible(false);
        }
    }

    return (
        <Container
            backButton
            title='Nova análise'>
            <ScrollView style={styles.container}>
                <Text style={styles.titleLabel}>Informações</Text>
                <ModalInput
                    title='Cultura'
                    value={cultura}
                    setValue={setCultura}
                    isVisible={modalVisible}
                    onPress={handleModalVisible}
                    setIsVisible={setModalVisible}
                    setIndexCultureSelected={setIndexCultureSelected}
                />
                <Input
                    title='pH'
                    value={pH}
                    setValue={setPH}
                    placeholder="Potêncial Hidrogeônico (H20)"
                />
                <Input
                    title='P'
                    value={P}
                    setValue={setP}
                    placeholder="Fósforo (mg dm-³)"
                />
                <Input
                    title='K'
                    value={K}
                    setValue={setK}
                    placeholder="Potássio (mg dm-³)"
                />
                <Input
                    title='Ca'
                    value={Ca}
                    setValue={setCa}
                    placeholder="Cálcio (cmolc dm-³)"
                />
                <Input
                    title='Mg'
                    value={Mg}
                    setValue={setMg}
                    placeholder="Magnésio (cmolc dm-³)"
                />
                <Input
                    title='S'
                    value={S}
                    setValue={setS}
                    placeholder="Enxofre (g/kg)"
                />
                <Input
                    title='B'
                    value={B}
                    setValue={setB}
                    placeholder="Boro (g/kg)"
                />
                <Input
                    title='Cu'
                    value={Cu}
                    setValue={setCu}
                    placeholder="Cobre (g/kg)"
                />
                <Input
                    title='Fe'
                    value={Fe}
                    setValue={setFe}
                    placeholder="Ferro (g/kg)"
                />
                <Input
                    title='Mn'
                    value={Mn}
                    setValue={setMn}
                    placeholder="Manganês (g/kg)"
                />
                <Input
                    title='M.O'
                    value={MO}
                    setValue={setMO}
                    placeholder="Mat. Org. (g dm-³)"
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title='Analisar'
                        onPress={handleDoAnalysis} />
                </View>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    titleLabel: {
        fontSize: 18,
        marginTop: 20,
        marginBottom: 20,
        color: Colors.cinza,
        fontFamily: Fonts.Montserrat_700,
    },
    buttonContainer: {
        marginTop: 15,
        marginBottom: 20,
    },
})

export default NewAnalyses;