import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Task from '../components/Task';

const List = () => {

    const [textInputValue, setTextInputValue] = useState('');
    const [tasks, setTasks] = useState([]);

    const addToList = (item) => {
        setTasks([...tasks, {name: item}]);
    }

    const handleDeleteTask = (indexTaskToDelete) => {
        setTasks((prevTasks) =>
            prevTasks.filter((task, index) => index !== indexTaskToDelete)
        );
    };

    return (
        <View style={styles.containerView}>
            <Text style={styles.title}>Liste des tâches</Text>
            <TextInput
                style={styles.input}
                placeholder='Ajouter une tâche'
                value={textInputValue}
                onChangeText={setTextInputValue}
            />
            <TouchableOpacity style={[styles.button, styles.buttonAdd]} onPress={() => addToList(textInputValue)}>
                <Text style={styles.textButton}>AJOUTER</Text>
            </TouchableOpacity>
            <FlatList
                data={tasks}
                renderItem={({item, index}) => <Task name={item.name} id={index} onDelete={handleDeleteTask}/>}
                keyExtractor={(task, index) => index} 
                style={styles.flatList}   
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },
    title: {
        fontSize: 30
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%'
    },
    button: {
        backgroundColor: '#007bff',
        height: 40,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold'
    },
    buttonAdd: {
        width: '80%'
    },
    flatList: {
        width: '100%',
        padding: 30
    }
})

export default List;