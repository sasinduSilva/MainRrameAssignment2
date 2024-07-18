import React,{useRef,useCallback,useEffect,useState} from 'react';
import { View, Text, StyleSheet,Button,TouchableOpacity,SafeAreaView,TextInput, FlatList } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetRefProps } from '../../components/BottomSheet';
import  Ionicons  from 'react-native-vector-icons/Ionicons';


const Home = () =>{
    const ref = useRef(null);
    const [note, setNote] = useState('');
    const [savedNote, setSavedNote] = useState('sdsadsadsa');

    //useEffect
    useEffect(()=>{
        onPress();
    },[]);

    //tempory todos
    const data = [
        { id: '1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' },
        // { id: '2', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' },
        // { id: '3', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' },
        // { id: '4', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' },
      ];

      //flatList render item
      const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{item.text}</Text>
          <View style={styles.flatListbuttonContainer}>
            <TouchableOpacity style={[styles.flatListbutton, styles.deleteButton]} onPress={() => handleDelete(item.id)}>
              <Ionicons name="trash" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.flatListbutton, styles.editButton]} onPress={() => handleEdit(item.id)}>
              <Ionicons name="pencil" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      );

    
      //add new note function
    const handleAddNote = () => {
        
      };

    const onPress = useCallback(() => {
        const isActive = ref?.current?.isActive();
        if (isActive) {
          ref?.current?.scrollTo(0);
        } else {
          ref?.current?.scrollTo(-200);
        }
      }, []);
    

    return(
        
      
      <GestureHandlerRootView  style={styles.container}>
        
        <View onPress={onPress} style={styles.contentContainer}>
        <View style={styles.headerContainer}>
        <Text style={styles.header}>Todo</Text>
        </View>
        <TextInput
        style={styles.input}
        placeholder="Add Notes..."
        placeholderTextColor="#a9a9a9"
        value={note}
        onChangeText={setNote}
        onPress={onPress}
      />
      <View style={styles.addButtonContainer}>
      <TouchableOpacity style={styles.addButton} onPress={handleAddNote}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
      </View>
      {savedNote ? (
        <View style={styles.noteContainer}>
          <Text style={styles.noteText}>{savedNote}</Text>
          <Text style={styles.emoji}>😊</Text>
        </View>
      ) : null}
        </View>
      
        {/* <StatusBar style="dark" /> */}
        {/* <TouchableOpacity style={styles.button} onPress={onPress} />| */}
        <BottomSheet ref={ref}>
        <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContainer}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
        </BottomSheet>
      
    </GestureHandlerRootView>
    
        
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        // justifyContent: 'center',
        // padding: 20,
      },
      contentContainer:{
        width:'100%',
        height:'40%',
        padding:20,
        justifyContent:'space-between',
        
        

    },
      
      addButtonContainer:{
        alignItems:'flex-end'

      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        // marginBottom: 20,
      },
      headerContainer:{
        width:'100%',
        // bottom:10
        // padding:20
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

    //   flat List styles
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