import React, { useState } from 'react';
import { View, Image, TouchableOpacity, TextInput, Text } from 'react-native';
import estilo from '../../estilo/estilo'

const Login = ({navigation}) => {

    const tentativa = () => {
        if( email == '' || senha == ''){
            
        }
        navigation.replace('Home')
    }

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    return (
        <View style={estilo.container}>
            <View style={estilo.loginImagem} >
                <Image
                    source={require('../../../../assets/images/imgLogin.png')}
                    style={{width: 300, height: 300}}
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
                    onPress={tentativa}>
                        <Text style={estilo.botaoEntrar}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={tentativa}>
                    <Text style={estilo.botaoConvidado}>Convidado</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    )
}

export default Login;