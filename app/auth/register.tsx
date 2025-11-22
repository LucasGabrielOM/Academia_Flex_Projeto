import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Link, router } from "expo-router";

export default function RegisterScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleRegister() {
    // Aqui futuramente você pode salvar no.
    // Agora só volta para o login.
    router.replace("/auth/login");
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Criar Cadastro</Text>
        <Text style={styles.subtitulo}>
          Preencha para salvar seu treino na Academia Flex
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu nome completo"
            placeholderTextColor="#9CA3AF"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="seuemail@email.com"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Crie uma senha"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity style={styles.botao} onPress={handleRegister}>
            <Text style={styles.botaoTexto}>Cadastrar</Text>
          </TouchableOpacity>

          <Link href="/auth/login" style={styles.link}>
            Já tem cadastro? <Text style={styles.linkNegrito}>Fazer login</Text>
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const AZUL_ESC = "#0B1930";
const VERMELHO = "#E30613";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AZUL_ESC,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subtitulo: {
    fontSize: 14,
    color: "#D1D5DB",
    marginBottom: 24,
    textAlign: "center",
  },
  form: {
    alignSelf: "stretch",
    gap: 12,
  },
  label: {
    color: "#E5E7EB",
    fontSize: 14,
    marginTop: 8,
  },
  input: {
    backgroundColor: "#111827",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#1F2937",
  },
  botao: {
    marginTop: 20,
    backgroundColor: VERMELHO,
    paddingVertical: 12,
    borderRadius: 999,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    marginTop: 16,
    textAlign: "center",
    color: "#E5E7EB",
    fontSize: 14,
  },
  linkNegrito: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
