import { View, Text, Image } from "react-native";

export default function LeaderboardItem({ name, score, rank }) {
  return (
    <View style={{
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: 12,
      borderRadius: 12,
      marginTop: 10
    }}>
      <Image
        source={{ uri: "https://i.pravatar.cc/100" }}
        style={{ width: 40, height: 40, borderRadius: 20 }}
      />

      <View style={{ marginLeft: 10 }}>
        <Text>{name}</Text>
        <Text style={{ color: "gray" }}>
          {score} puan
        </Text>
      </View>

      <Text style={{
        marginLeft: "auto",
        fontWeight: "bold"
      }}>
        {rank}
      </Text>
    </View>
  );
}