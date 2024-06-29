import React from "react";
import { View, StyleSheet } from "react-native";
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Layout() {
    return (
        <GestureHandlerRootView style={styles.container}>
            <Drawer/>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});