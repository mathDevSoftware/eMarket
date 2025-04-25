import React from "react";
import { View, Text } from 'react-native'
import styles from "./styles";
import Header from "./components/Header";

function Home() {
    return (
        <View style={styles.container}>
            <Header/>
        </View>
    )
}

export default Home