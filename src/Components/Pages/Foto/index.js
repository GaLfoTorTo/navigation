import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estilo from '../../estilo/estilo';

const Foto = ({ navigation }) => {
    return (
        <View style={estilo.containerFoto}>
            <View style={estilo.Fotos}>
                <LinearGradient
                    colors={['rgb(200, 0, 0)', 'rgb(0, 0, 200)']}
                    start={{x:0.7, y: 0}}
                    style={{
                        borderRadius: 10,
                        padding: 2,
                        marginBottom: 10
                    }}
                >
                    <Image
                        source={require('../../../../assets/images/imgFoto1.jpg')}
                        style={estilo.Foto}
                    />
                </LinearGradient>
                <LinearGradient
                    colors={['rgb(200, 0, 0)', 'rgb(0, 0, 200)']}
                    start={{ x: 0.7, y: 0 }}
                    style={{
                        borderRadius: 10,
                        padding: 2,
                        marginBottom: 10
                    }}
                >
                    <Image
                        source={require('../../../../assets/images/imgFoto2.jpg')}
                        style={estilo.Foto}
                    />
                </LinearGradient>
                <LinearGradient
                    colors={['rgb(200, 0, 0)', 'rgb(0, 0, 200)']}
                    start={{ x: 0.7, y: 0 }}
                    style={{
                        borderRadius: 10,
                        padding: 2,
                        marginBottom: 10
                    }}
                >
                    <Image
                        source={require('../../../../assets/images/imgFoto3.jpg')}
                        style={estilo.Foto}
                    />
                </LinearGradient>
                <LinearGradient
                    colors={['rgb(200, 0, 0)', 'rgb(0, 0, 200)']}
                    start={{ x: 0.7, y: 0 }}
                    style={{
                        borderRadius: 10,
                        padding: 2,
                        marginBottom: 10
                    }}
                >
                    <Image
                        source={require('../../../../assets/images/imgFoto4.jpg')}
                        style={estilo.Foto}
                    />
                </LinearGradient>
            </View>
            <LinearGradient
                colors={['rgb(0, 0, 100)', 'rgb(0, 0, 250)']}
                start={{x: 0.7, y: 0}}
                style={estilo.cardFoto}
            >
                <Text style={estilo.cardText}>Apps' Photos stay in this section.</Text>
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

export default Foto;