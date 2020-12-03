import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({


    //estilo Login
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(240,240,250)'
    },
    loginImagem: {
        flex: 1,
        width: 300,
        height: 300
    },
    inputs: {
        width: '80%',
        flex: 1,
    },
    input: {
        borderRadius: 10,
        padding: 10,
        marginBottom: 5,
        backgroundColor: 'white'
    },
    botaoEntrar: {
        padding: 15,
        marginTop: 5,
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgb(2, 10, 180)',
        borderRadius: 25,
        fontWeight: 'bold'
    },
    botaoConvidado: {
        padding: 15,
        marginTop: 5,
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgb(150, 150, 150)',
        borderRadius: 25,
        fontWeight: 'bold'
    },
    textoMensagem: {
        fontSize: 17,
        textAlign: 'center',
        color: 'rgb(150, 20, 5)',
        backgroundColor: 'rgb(250, 200, 200)',
        borderRadius: 10,
        padding: 5,
        marginBottom: 5
    },
})

export default estilo;