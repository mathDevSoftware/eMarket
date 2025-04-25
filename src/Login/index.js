import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Alert, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Input, Button } from '@rneui/base';
import Entypo from 'react-native-vector-icons/Entypo';
import { login } from '../services/User/userApi';
import styles from './styles';

function Login({ navigation }) {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        console.log("Fazendo login com:", email, password);

        const result = await login(email, password);
        setLoading(false);

        console.log("Resultado do login:", result);

        if (result.success) {
            console.log("Login bem-sucedido, navegando para Home");
            //Alert.alert('Sucesso', result.message);
            navigation.reset({
                index: 0,
                routes: [{name: "Home"}]
            });
            console.log("Navegação chamada");
        } else {
            Alert.alert('Erro', result.message);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient
                colors={['#0D47A1', '#42A5F5']}
                style={styles.container}
            >
                <View style={styles.loginBox}>
                    <Text style={styles.headerText}>
                        Login
                    </Text>
                    <Input
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Email'
                        rightIcon={{ name: "mail" }}
                    />
                    <Input
                        placeholder='Password'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                        rightIcon={
                            <Entypo
                                name={showPassword ? "eye" : "eye-with-line"}
                                size={20}
                                onPress={() => setShowPassword(!showPassword)}
                            />
                        }
                    />
                    <Button
                        title={"Login"}
                        onPress={handleLogin}
                        loading={loading}
                        loadingProps={{ size: 'small', color: 'white' }}
                    />
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Text>Don't have an account? </Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Register")}
                            >
                                <Text style={styles.linkText}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

export default Login;
