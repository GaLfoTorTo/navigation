import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import estilo from '../estilo/estilo';

const Botoes = ({navigation}) => {
    return(
        <View style={estilo.botoesHome}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}>
                <Text style={estilo.botaoHome}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Foto')}>
                <Text style={estilo.botaoHome} >Foto</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Sobre')}>
                <Text style={estilo.botaoHome}>Sobre</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Contato')}>
                <Text style={estilo.botaoHome} >Contato</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Botoes;

