import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
 
    //estilo Home
    containerHome: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    homeWelcome: {
        backgroundColor: 'white',
        alignItems: 'center',
        height: 200

    },
    welcomeImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardHome: {
        borderRadius: 13,
        padding: 10,
        margin: 10,
        height: 230,
        width: 350,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardText: {
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'blue',
        fontSize: 27,
        textAlign: 'center'
    }
})

export default estilo;