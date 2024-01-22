import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AddTask from './AddTask'

const ToDoList = ({ tasks }) => {
    const [toDo, setToDo] = useState(tasks.map((value) => ({ id: uuidv4(), title: value })));

    const addToDo = (newTitle) => {
        const newToDo = { id: uuidv4(), title: newTitle }
        setToDo((prevToDo) => [...prevToDo, newToDo]);
    };

    const removeToDo = (id) => {
        setToDo((prevToDo) => {
            return prevToDo.filter((toDo) => {
                return toDo.id != id;
            });
        });
    };

    return (
        <View style={styles.todoListContainer}>
            {toDo.map((task) => (
                <View key={task.id} style={styles.todoItem}>
                    <Text style={styles.text}>{task.title}</Text>
                    <Button title='Remove' onPress={() => removeToDo(task.id)} />
                </View>
            ))}
            <AddTask onAddTask={addToDo} />
        </View>
    );
};

const styles = StyleSheet.create({
    todoListContainer: {
        margin: 10,
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
});

ToDoList.defaultProps = {
    tasks: []
}

export default ToDoList;