import { View, Text } from "react-native";

export default function BottomNav() {
  return (
    <View style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: "#fff",
      padding: 12,
      borderTopWidth: 1,
      borderColor: "#eee"
    }}>
      <Text>Ana Sayfa</Text>
      <Text>Wellness</Text>
      <Text>Aktivite</Text>
      <Text>Ayarlar</Text>
    </View>
  );
}