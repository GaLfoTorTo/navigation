import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({

    botoesHome: {
        flexDirection: 'row',
        alignItems: 'center', 
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    botaoHome: {
        width: 150,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: 'rgb(5, 15, 190)',
        borderRadius: 7,
        padding: 10,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    }
})

export default estilo;