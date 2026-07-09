import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FocusCard() {
  return (
    <View style={{
      margin: 16,
      padding: 16,
      borderRadius: 16,
      backgroundColor: "#FF6A00"
    }}>
      <Text style={{ color: "white", fontWeight: "bold" }}>
        Odak Modu
      </Text>

      <Text style={{ color: "white", marginTop: 8 }}>
        Sertan şu an ders çalışıyor. Bildirimler sessize alındı.
      </Text>

      <Ionicons
        name="timer-outline"
        size={28}
        color="white"
        style={{ marginTop: 10 }}
      />

      <TouchableOpacity style={{
        marginTop: 16,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        alignSelf: "flex-end"
      }}>
        <Text>Yönet</Text>
      </TouchableOpacity>
    </View>
  );
}