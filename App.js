import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "lightblue",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{}}>
        <View
          style={{
            backgroundColor: "white",
            width: 400,
            height: 400,
            overflow: "hidden",
            borderRadius: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "red",
              flex: 6,
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 5,
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                src="https://t3.ftcdn.net/jpg/01/74/25/34/360_F_174253404_hDoykbeIMItfyCUtaXKHFt6XwSKkxrYU.jpg"
              />
            </View>

            <View
              style={{
                flex: 5,
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderBottomColor: "black",
                borderBottomWidth: 1,
                gap: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  ALADDIN ENBEH
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "bold" }}>1995</Text>
              </View>
              <Text>Location: Kuwait</Text>
            </View>
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                position: "absolute",
                overflow: "hidden",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720310400&semt=ais_user"
              />
            </View>
          </View>

          <View
            style={{
              backgroundColor: "withe",
              flex: 1,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>Follwers</Text>
              <Text style={{ fontWeight: "bold" }}>500K</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>Likes</Text>
              <Text style={{ fontWeight: "bold" }}>1800</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>Photos</Text>
              <Text style={{ fontWeight: "bold" }}>200</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
