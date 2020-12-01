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
        alignItems: 'center'
        
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
    },
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
    },

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
        width: 150,
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
        height: 200,
        width: 350,        
    },
})

export default estilo;