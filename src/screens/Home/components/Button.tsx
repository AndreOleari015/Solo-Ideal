import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { Colors, Fonts } from '../../../theme/Theme';

type Props = TouchableOpacityProps & {
    title: string;
}

const Button = ({ title, ...rest }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonContainer}
            {...rest}
        >
            <Text style={styles.buttonTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 67,
        width: "100%",
        marginTop: 25,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.verder_escuro,
    },
    buttonTitle: {
        fontSize: 24,
        color: Colors.branco,
        fontFamily: Fonts.Montserrat_600,
    }
})

export default Button;