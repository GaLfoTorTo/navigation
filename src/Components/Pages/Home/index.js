import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import estilo from '../../estilo/estilo';
//import Botoes from '../../Botoes/botoes';

const Home = ({navigation}) => {
    return (
        <View style={estilo.containerHome}>
            <View style={estilo.homeWelcome}>
                <View style={estilo.welcomeImg}>
                    <Image
                        resizeMode='center'
                        source={require('../../../../assets/images/welcome.png')}
                    />
                </View>
            </View>
            <LinearGradient
                colors={['rgb(130, 0, 12)', 'rgb(250, 0, 12)']}
                starts={{x: 0.5, y: 0}}
                style={estilo.cardHome}
            >
                <Text style={estilo.cardText}>Welcome fresco, this is the app's Home page.</Text>
                <Text style={estilo.cardText}>Navigate to others pages of the app from the buttons.</Text>
            </LinearGradient>
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
        </View>
    )
}

export default Home;