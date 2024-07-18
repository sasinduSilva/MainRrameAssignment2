import React, { useRef, useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '../../components/BottomSheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { dispatch } from '../../store/reduxStore';
import { addTodo, editTodo, removeTodo } from '../../store/todoSlice';
import { useSelector } from "react-redux";

const Home = () => {
  // Ref for the bottom sheet
  const ref = useRef(null);
  
  // State to manage new todo input
  const [newTodo, setNewTodo] = useState("");
  
  // State to manage all todos (not used directly here)
  const [allTodos, setAllTodos] = useState([]);
  
  // State to manage the submit button label (Add or Save)
  const [submitLabel, setSubmitLabel] = useState("Add");
  
  // State to keep track of the item being edited
  const [itemToBeEdited, setItemToBeEdited] = useState("");

  // Get todos from redux store
  const reduxTodos = useSelector((state) => state.todos.allTodos);

  // Sample saved note (can be dynamic)
  const savedNote = "hello world";

  // Effect to trigger onPress function on component mount
  useEffect(() => {
    onPress();
  }, []);

  // Function to render each todo item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
      <View style={styles.flatListbuttonContainer}>
        <TouchableOpacity style={[styles.flatListbutton, styles.deleteButton]} onPress={() => handleDelete(item)}>
          <Ionicons name="trash" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.flatListbutton, styles.editButton]} onPress={() => handleEdit(item)}>
          <Ionicons name="pencil" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  // Function to handle adding or editing a note
  const handleAddNote = () => {
    if (submitLabel === "Add") {
      if (newTodo) {
        // Dispatch action to add todo
        dispatch(
          addTodo({
            todoTobeAdded: newTodo
          })
        );
      }
    } else {
      // If editing, create a new array without the item being edited and add the new todo
      const itemRemovedArray = reduxTodos.filter(todo => todo !== itemToBeEdited);
      const newArry = [...itemRemovedArray, newTodo];
      // Dispatch action to edit todo
      dispatch(
        editTodo({
          newTodoArray: newArry
        })
      );
    }
    // Reset input and states
    setNewTodo("");
    onPress();
    setSubmitLabel("Add");
    setItemToBeEdited("");
  };

  // Function to handle editing a note
  const handleEdit = (todoTobeEdited) => {
    if (reduxTodos.includes(todoTobeEdited)) {
      // Set states for editing
      setNewTodo(todoTobeEdited);
      setSubmitLabel("Save");
      setItemToBeEdited(todoTobeEdited);
    }
  };

  // Function to handle deleting a note
  const handleDelete = (todoToBeDeleted) => {
    if (reduxTodos.includes(todoToBeDeleted)) {
      // Dispatch action to remove todo
      dispatch(
        removeTodo({
          newTodoArray: reduxTodos.filter(todo => todo !== todoToBeDeleted)
        })
      );
    }
  };

  // Function to toggle the bottom sheet
  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View onPress={onPress} style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Todo</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Add Notes..."
          placeholderTextColor="#a9a9a9"
          value={newTodo}
          onChangeText={setNewTodo}
          onPress={onPress}
          multiline={true}
        />
        <View style={styles.addButtonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={handleAddNote}>
            <Text style={styles.addButtonText}>{submitLabel}</Text>
          </TouchableOpacity>
        </View>
        {savedNote ? (
          <View style={styles.noteContainer}>
            <Text style={styles.noteText}>{savedNote}</Text>
            <Text style={styles.emoji}>😊</Text>
          </View>
        ) : null}
      </View>
      <BottomSheet ref={ref}>
        <FlatList
          data={reduxTodos}
          renderItem={renderItem}
          keyExtractor={item => item}
          contentContainerStyle={styles.listContainer}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </BottomSheet>
    </GestureHandlerRootView>
  )
}

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    height: '40%',
    padding: 20,
    justifyContent: 'space-between',
  },
  addButtonContainer: {
    alignItems: 'flex-end'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerContainer: {
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
  },
  addButton: {
    backgroundColor: '#66d2b1',
    padding: 10,
    borderRadius: 5,
    width: '20%',
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  noteContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#f8bc6a',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noteText: {
    color: '#fff',
    fontSize: 14,
    flex: 1,
  },
  emoji: {
    fontSize: 24,
  },
  listContainer: {
    padding: 16,
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#eee',
    borderWidth: 1,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    marginRight: 16,
    borderBottomColor: 'black'
  },
  flatListbuttonContainer: {
    flexDirection: 'row',
  },
  flatListbutton: {
    padding: 8,
    borderRadius: 8,
    marginLeft: 8,
  },
  deleteButton: {
    backgroundColor: '#f94d56',
  },
  editButton: {
    backgroundColor: '#6bc46d',
  },
  separator: {
    height: 16,
  },
});

export default Home;
