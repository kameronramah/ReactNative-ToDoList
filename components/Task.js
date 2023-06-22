import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";


const Task = ({id, name, onDelete}) => {

    const [isDown, setIsDown] = useState(false);

    const deleteToList = () => {
        onDelete(id);
    }

    return (
        <View style={styles.taskView}>
            <Text>{name}</Text>
            <View style={styles.viewButtons}>
                <TouchableOpacity style={styles.button} onPress={deleteToList}>
                    <Text style={styles.textButton}>SUPPRIMER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton} onPress={() => setIsDown(!isDown)}> {!isDown ? 'TERMINE' : 'ANNULER'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    taskView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#007bff',
        height: 40,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2
    },
    textButton: {
        color: 'white'
    },
    viewButtons: {
        flexDirection: 'row'
    }
})

export default Task;