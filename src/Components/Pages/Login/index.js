import React from 'react';
import { View, Image, TouchableOpacity, TextInput, Text } from 'react-native';
import estilo from '../../estilo/estilo'

const Login = ({navigation}) => {
    return (
        <View style={estilo.container}>
            <View style={estilo.loginImagem} >
                <Image
                    source={require('../../../../assets/images/imgLogin.png')}
                />
            </View>
            <View style={estilo.inputs}>
                <TextInput
                    placeholder='Usuario ou E-mail'
                    style={estilo.input}
                />
                <TextInput
                    secureTextEntry={true}
                    placeholder='Senha'
                    style={estilo.input}
                />
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Home')}>
                        <Text style={estilo.botaoEntrar}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}>
                    <Text style={estilo.botaoConvidado}>Convidado</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    )
}

export default Login;