import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Input, Button } from '@rneui/base';
import Entypo from 'react-native-vector-icons/Entypo';
import { registerUser } from '../services/User/userApi';
import styles from './styles';

function Register({ navigation }) {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleRegister() {
        if (!username || !email || !password) {
            alert('Preencha todos os campos!');
            return;
        }

        setLoading(true);
        const result = await registerUser({ username, email, password });
        setLoading(false);

        if (result.success) {
            navigation.navigate("Home")
        } else {
            alert(result.message);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient
                colors={['#0D47A1', '#42A5F5']}
                style={styles.container}
            >
                <View style={styles.loginBox}>
                    <Text style={styles.headerText}>
                        Sign In
                    </Text>
                    <Input
                        placeholder='Username'
                        value={username}
                        onChangeText={setUsername}
                        rightIcon={
                            <Entypo
                                name='user'
                                size={20}
                            />
                        }
                    />
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
                        title={loading ? "Creating..." : "Create Account"}
                        loading={loading}
                        onPress={handleRegister}
                    />
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Text>have an account? </Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Login")}
                            >
                                <Text style={styles.linkText}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

export default Register;
