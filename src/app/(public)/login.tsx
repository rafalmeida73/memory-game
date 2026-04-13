import { colors } from "@/constants/colors";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("@/assets/Logo.png")}
            resizeMode="contain"
          />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>memory game</Text>
          <Text style={styles.subtitle}>
            Teste sua memória enquanto aprende!
          </Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput />

          <TouchableOpacity>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale.gray700,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  logoContainer: {
    marginBottom: 32,
  },
  logo: {
    width: 71,
    height: 71,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 48,
  },
  title: {
    fontSize: 28,
    color: colors.grayscale.gray100,
    fontWeight: "800",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.grayscale.gray200,
  },
  formContainer: {
    width: "100%",
    gap: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.grayscale.white,
  },
});
