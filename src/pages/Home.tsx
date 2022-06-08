import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }
    setTasks(oldTasks => [...oldTasks, task]);
    //TODO - add new task
  }

  function handleToggleTaskDone(id: number) {
    //Criamos um auxiliar newState.
    const newState = tasks;
    //Procuramos pelos itens que contem o id especificado e alteramos seu estado
    newState.filter(item => item.id == id).map(item => item.done = !item.done); 
    setTasks(oldState => [...newState]); //setTasks PRECISA receber uma função
    //TODO - toggle task done if exists
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(item=> item.id != id))
    //TODO - remove task from state
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})