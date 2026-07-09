import {
  View,
  ScrollView,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import FocusCard from "../components/FocusCard";
import LeaderboardItem from "../components/LeaderboardItem";
import BottomNav from "../components/BottomNav";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>

          <Header />

          {/* Welcome */}
          <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Merhaba Meltem,
            </Text>
            <Text style={{ color: "gray", marginTop: 6 }}>
              Ailen bugün dijital dengede kalmaya devam ediyor.
            </Text>
          </View>

          {/* 👉 StatsCard zaten içinde progress bar olmalı */}
          <StatsCard />

          {/* 👉 FocusCard içinde icon olmalı */}
          <FocusCard />

          {/* Leaderboard */}
          <View style={{ padding: 16 }}>
            <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Haftalık Liderlik
              </Text>
              <Text style={{ color: "#FF6A00" }}>
                Tümünü Gör
              </Text>
            </View>

            <LeaderboardItem name="Sertan" score="94" rank={1} />
            <LeaderboardItem name="Deniz" score="82" rank={2} />
            <LeaderboardItem name="Ahmet" score="76" rank={3} />
          </View>

          {/* Görev Köşesi */}
          <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Görev Köşesi
            </Text>

            {/* Görev 1 */}
            <View style={{
              backgroundColor: "#fff",
              padding: 16,
              borderRadius: 12,
              marginTop: 10
            }}>
              <Text style={{ fontWeight: "bold" }}>
                Dijital Detoks Saati
              </Text>
              <Text style={{ color: "gray", marginTop: 4 }}>
                Akşam yemeğinde telefonlar kutuya!
              </Text>
            </View>

            {/* Görev 2 (EKLEDİK) */}
            <View style={{
              backgroundColor: "#fff",
              padding: 16,
              borderRadius: 12,
              marginTop: 10
            }}>
              <Text style={{ fontWeight: "bold" }}>
                30 dk Odak Modu
              </Text>
              <Text style={{ color: "gray", marginTop: 4 }}>
                Bildirimleri kapat ve odaklan.
              </Text>
            </View>
          </View>

        </ScrollView>

        {/* 👉 Navbar altta sabit */}
        <BottomNav />
      </View>
    </SafeAreaView>
  );
}