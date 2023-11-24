import React from 'react';
import {useState} from 'react';

import {StyleSheet, TextInput, Text, Button, View} from 'react-native';

export default function Form({ addHandler }) {
    const [text, setValue] = useState("");
    const onChange = (text) => {
        setValue(text);
    }; 

    return (   
        <View>
            <TextInput style={styles.input} 
            onChangeText={onChange}
            placeholder='Впишите задачу...'
            />

            <Button style={styles.button}
            color="#483D8B"
            onPress={() => addHandler(text)}
            title='Добавить задачу'
            />
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        padding: 5,
        textAlign: "center",
        borderBottomWidth: 1,
        marginTop: 20,
        marginBottom: 20,
        width: "60%",
        marginLeft: "20%",
    },

    button:{
        padding: 10,
        textAlign: "center",
        borderBottomWidth: 1,
        marginTop: 20,
        marginBottom: 20,
        width: "60%",
        marginLeft: "20%",
    },
});