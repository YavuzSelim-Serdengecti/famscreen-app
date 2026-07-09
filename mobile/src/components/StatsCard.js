import { View, Text } from "react-native";

export default function StatsCard() {
  return (
    <View style={{
      margin: 16,
      padding: 16,
      borderRadius: 16,
      backgroundColor: "white"
    }}>
      <Text style={{ color: "#FF6A00", fontWeight: "bold" }}>
        AİLENİZİN BUGÜN
      </Text>

      <Text style={{
        fontSize: 32,
        fontWeight: "bold",
        marginTop: 10
      }}>
        04:32
      </Text>

      <Text style={{ color: "gray" }}>
        Toplam Ekran Süresi
      </Text>

      <Text style={{
        fontSize: 28,
        color: "#FF6A00",
        marginTop: 10
      }}>
        88 ↑
      </Text>

      <Text style={{ color: "gray" }}>
        Denge Skoru
      </Text>

      {/* Progress */}
      <View style={{ marginTop: 16 }}>
        <Text style={{ color: "gray" }}>
          Haftalık hedefin %72'si tamamlandı
        </Text>

        <View style={{
          height: 6,
          backgroundColor: "#ddd",
          borderRadius: 10,
          marginTop: 6
        }}>
          <View style={{
            width: "72%",
            height: 6,
            backgroundColor: "#FF6A00",
            borderRadius: 10
          }} />
        </View>
      </View>
    </View>
  );
}