import React from 'react';
import { Text, GestureResponderEvent, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme/Theme';

type Props = {
    title: string,
    onPress?: (event: GestureResponderEvent) => void;
}

const Button = ({ title, onPress }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.5}
            style={styles.container}>
            <Text style={styles.titleLabel}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.azul,
    },
    titleLabel: {
        color: Colors.branco,
        fontFamily: Fonts.Montserrat_700,
    },
})

export default Button;