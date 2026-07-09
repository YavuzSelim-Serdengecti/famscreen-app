import { View, Text, Image } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text>☰</Text>
      <Text>Logo</Text>
      <Image
        source={{ uri: "https://i.pravatar.cc/100" }}
        style={{ width: 40, height: 40, borderRadius: 20 }}
      />
    </View>
  );
}