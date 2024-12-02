// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { Provider as PaperProvider } from "react-native-paper";
// import Connections from "./src/Connections";
// import Graphs from "./src/Graphs";

// const Tab = createMaterialBottomTabNavigator();

// export default function App() {
//   return (
//     <PaperProvider>
//       <NavigationContainer>
//         <Tab.Navigator
//           initialRouteName="Connections"
//           shifting={true}
//           barStyle={{ backgroundColor: "#6200ee" }}
//         >
//           <Tab.Screen
//             name="Connections"
//             component={Connections}
//             options={{
//               tabBarIcon: "link",
//             }}
//           />
//           <Tab.Screen
//             name="Graphs"
//             component={Graphs}
//             options={{
//               tabBarIcon: "chart-line",
//             }}
//           />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </PaperProvider>
//   );
// }



// import "react-native-gesture-handler";

// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { Provider as PaperProvider } from "react-native-paper";
// import Connections from "./src/Connections";
// import Graphs from "./src/Graphs";
// import SensorDataProvider from "./src/SharedContext";


// const Tab = createMaterialBottomTabNavigator();

// import { GestureHandlerRootView } from "react-native-gesture-handler";

// export default function App() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <SensorDataProvider>
//         <PaperProvider>
//           <NavigationContainer>
//             <Tab.Navigator
//               initialRouteName="Connections"
//               shifting={true}
//               barStyle={{ backgroundColor: "#6200ee" }}
//             >
//               <Tab.Screen
//                 name="Connections"
//                 component={Connections}
//                 options={{
//                   tabBarIcon: "link",
//                 }}
//               />
//               <Tab.Screen
//                 name="Graphs"
//                 component={Graphs}
//                 options={{
//                   tabBarIcon: "chart-line",
//                 }}
//               />
//             </Tab.Navigator>
//           </NavigationContainer>
//         </PaperProvider>
//       </SensorDataProvider>
//     </GestureHandlerRootView>
//   );
// }


// index.tsx
// src/app/index.tsx

// src/app/index.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      {/* <Link href="/src/Graphs" style={styles.link}>
        Go to Graphs
      </Link> */}
      <Link href="/src/Connections" style={styles.link}>
        Go to Connections
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;
