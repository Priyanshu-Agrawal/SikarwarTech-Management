import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            {/* <Image source={require('./assets/sikarwartechlogo.jpg')} style={styles.logo} /> */}
            <Text>Sikarwar Tech Services</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    logo: {
        width: 200,
        height: 200,
    },
});

export default SplashScreen;
