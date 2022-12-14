import React, { Dispatch, SetStateAction } from 'react';
import { Text, KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme/Theme';

type Props = {
    title: string,
    value: string,
    placeholder: string,
    setValue: Dispatch<SetStateAction<string>>;
}

const Input = ({ title, value, placeholder, setValue }: Props) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.titleLabel}>{title}</Text>
            <TextInput
                style={styles.input}
                value={value}
                keyboardType={"numeric"}
                onChangeText={setValue}
                placeholder={placeholder} />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    titleLabel: {
        fontSize: 16,
        color: Colors.cinza,
        fontFamily: Fonts.Montserrat_700,
        marginBottom: 5,
    },
    input: {
        height: 50,
        borderRadius: 8,
        paddingLeft: 10,
        fontFamily: Fonts.Montserrat_600,
        backgroundColor: Colors.branco,
    }
})

export default Input;