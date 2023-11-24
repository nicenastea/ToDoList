import React from "react";
import reactDom from "react-dom";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return (
    <View style={styles.main}>
        <Text style={styles.text}>СПИСОК ДЕЛ</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    main: {
        padding: 20,
        borderRadius: 5,
        backgroundColor: "#6495ED",
        marginTop: 20,
        width: "60%",
        marginLeft: "20%",
    },

    text: {
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 15
    },

});