import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();

  async function handleLogin() {
    if (email.length === 0) return;
    await login(email);
  }

  return (
    <View>
      <Text>LOGIN</Text>
      <TextInput 
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
