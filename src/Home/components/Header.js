import React, { useState } from 'react';
import { View, TouchableOpacity } from "react-native";
import { Header as HeaderRNE, Avatar } from '@rneui/themed';
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as ImagePicker from 'expo-image-picker';
import styles from "../styles";

function Header() {
    const [image, setImage] = useState(null);

    const pickProf = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            alert('Permissão para acessar a galeria é necessária!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <SafeAreaProvider>
            <HeaderRNE
                leftComponent={{
                    icon: 'menu',
                    color: '#fff',
                }}
                rightComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity
                            style={{ marginLeft: 10 }}
                            onPress={pickProf}
                        >
                            <Avatar
                                size={40}
                                rounded
                                source={image ? { uri: image } : undefined}
                                containerStyle={{ backgroundColor: "#9700b9" }}
                            />
                        </TouchableOpacity>
                    </View>
                }
            />
        </SafeAreaProvider>
    );
}

export default Header;
