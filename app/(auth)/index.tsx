import { useSession } from "@/context/Authentication";
import { Pressable, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar"
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export default function Authentication() {

    const { signIn } = useSession()

    const sendData = async () => {
        try {
            await addDoc(collection(db, "test_messages"), {
                message: "Hello from my iPhone!",
                timestamp: new Date()
            });
            alert("Success! Data sent to Firebase.");
        } catch (e) {
            console.error("Error adding document: ", e);
            alert("Failed to send data.");
        }
    };

    return (
        <View className="h-full justify-center items-center relative">
            <StatusBar style="auto" />

            <Text className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">Welcome</Text>

            <Pressable className="bg-green-500 p-4 mt-5 rounded-full" onPress={sendData}>
                <Text className="text-white font-extrabold">Send Test Data</Text>
            </Pressable>

            <Pressable className="absolute bottom-10 bg-[#2e78b7] p-4 rounded-full" onPress={() => signIn()}>
                <Text className="text-white font-extrabold">Continue</Text>
            </Pressable>
        </View>
    )
}