import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { Provider } from "react-redux";
import store from "./store";
import StackNavigator from "./screens/StackNavigator";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <StackNavigator />
        <StatusBar style="auto" />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
});
