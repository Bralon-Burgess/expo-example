import { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function NoteTaker() {
  const [note, setNote] = useState('');

  const saveNote = () => {
    console.log("Saved note:", note);
    // Add logic later to save this note permanently
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        multiline
        placeholder="Write your note here..."
        value={note}
        onChangeText={setNote}
        style={{ 
          borderWidth: 1, 
          padding: 10, 
          minHeight: 120, 
          marginBottom: 10,
          borderColor: 'gray'
        }}
      />
      <Button title="Save Note" onPress={saveNote} />
    </View>
  );
}