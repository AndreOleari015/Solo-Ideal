import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Container from '../../components/Container/Container';
import { Fonts } from '../../theme/Theme';



const About: React.FC = () => {

    return (
        <Container
            backButton
            title='Sobre'>
            <Text style={styles.contentLabel}>
                App em tem como fins educativos, os calculos feitos foram feitos com base nos estudos dos desenvolvedores, n
                ão deve ser utilizado como fonte unica de informação
            </Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    contentLabel: {
        flex: 1,
        fontSize: 24,
        marginHorizontal: 20,
        fontFamily: Fonts.Montserrat_600,
    }
})

export default About;