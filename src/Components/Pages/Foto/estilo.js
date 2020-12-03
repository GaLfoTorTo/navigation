import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
    
     //estilo Fotos
     containerFoto: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    Fotos: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'space-evenly'
    },
    Foto: {
        width: 125,
        height: 125,
        marginBottom: 2,
        marginTop: 2,
        marginLeft: 2,
        marginRight: 2,
        borderRadius: 10
    },
    cardFoto: {
        borderRadius: 13,
        padding: 10,
        margin: 10,
        height: 120,
        width: 350,        
    },
    textFoto: {
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'blue',
        fontSize: 20,
        textAlign: 'center',
    },
})

export default estilo;