import React, { useState } from 'react';
import { View, Image, TouchableOpacity, TextInput, Text } from 'react-native';
import efetuarLogin from '../../../../../screens-react-native/src/api/login';
import estilo from './estilo'

const Login = ({navigation}) => {

    const tentativa = async () => {
        if( email == '' || senha == ''){
            setMensagem('E-mail e senha são obrigatórios')
        }else {
            const resposta = await efetuarLogin(email, senha)
            if (resposta.token){
                navigation.replace('Home', {email: email})
            }else {
                setMensagem('Não foi possivel efetuar login');
            }
        }
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
                <Text style={estilo.textoMensagem}>{mensagem}</Text>
                <TextInput
                    placeholder='Usuario ou E-mail'
                    style={estilo.input}
                    onChangeText={texto => setEmail(texto)}
                />
                <TextInput
                    secureTextEntry={true}
                    placeholder='Senha'
                    style={estilo.input}
                    onChangeText={texto => setSenha(texto)}

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