import { StyleSheet, Text, View, Pressable, TextInput, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { Inter_500Medium, useFonts } from '@expo-google-fonts/inter'

import { data } from '@/data/todos';

const Index = () => {
  const [todos, setTodos] = useState(data.sort((a, b) => b.id - a.id))
  const [text, setText] = useState('')
  const [ loaded, error ] = useFonts({
    Inter_500Medium
  })

  if (!loaded && !error) {
    return null
  }
 
  const addTodo = () => {
    if (text.trim()) {
      const newId = todos.length > 0 ? todos[0].id + 1 : 1
      setTodos([{ id: newId, title: text, completed: false }, ...todos])
      setText('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text 
        style={[styles.todoText, item.completed && styles.completedText]}
        onPress={() => toggleTodo(item.id)}
      >
        {item.title}
      </Text>
      <Pressable onPress={() => removeTodo(item.id)}>
        <MaterialCommunityIcons 
          name="delete-circle" 
          size={36} 
          color="red" 
          selectable={undefined}
        />
      </Pressable>
    </View>
  )

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new todo"
          placeholderTextColor="gray"
          value={text}
          onChangeText={setText}
        />
        <Pressable 
          onPress={addTodo}
          style={styles.addButton}
        >
          <Text
            style={styles.addButtonText}
          >
            Add
          </Text>
        </Pressable>
      </View>
      <FlatList 
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    width: '100%',
    maxWidth: 1024,
    marginHorizontal: 'auto',
    pointerEvents: 'auto'
  },
  input: {
    flex: 1,
    minWidth: 0,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginRight: 10,
    fontSize: 18,
    fontFamily: 'Inter_500Medium',
    color: 'white'
  },
  addButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5
  },
  addButtonText: {
    fontSize: 18,
    color: 'black'
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '100%',
    maxWidth: 1024,
    marginHorizontal: 'auto',
    pointerEvents: 'auto'
  },
  todoText: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Inter_500Medium',
    color: 'white'
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray'
  }
})

export default Index