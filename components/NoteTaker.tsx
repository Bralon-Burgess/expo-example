import { useState, useEffect } from 'react';
import { View, TextInput, Button, useColorScheme } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function NoteTaker() {
  const [note, setNote] = useState('');
  const colorScheme = useColorScheme();

  useEffect(() => {
    // Load the note when the component mounts
    async function loadNote() {
      const savedNote = await SecureStore.getItemAsync('user_note');
      if (savedNote) {
        setNote(savedNote);
      }
    }
    loadNote();
  }, []);

  const saveNote = async () => {
    // Save the note to SecureStore
    await SecureStore.setItemAsync('user_note', note);
    console.log("Note saved securely!");
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        multiline
        placeholder="Write your note here..."
        placeholderTextColor={colorScheme === 'dark' ? 'lightgray' : 'gray'}
        value={note}
        onChangeText={setNote}
        style={{ 
          borderWidth: 1, 
          padding: 10, 
          minHeight: 120, 
          marginBottom: 10,
          borderColor: 'gray',
          // Change text to white in dark mode, black in light mode
          color: colorScheme === 'dark' ? 'white' : 'black',
        }}
      />
      <Button title="Save Note" onPress={saveNote} />
    </View>
  );
}