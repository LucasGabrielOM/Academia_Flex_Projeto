import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const savedUser = await AsyncStorage.getItem("user");
      setUser(savedUser);
      setLoading(false);
    }
    loadUser();
  }, []);

  async function login(email: string) {
    await AsyncStorage.setItem("user", email);
    setUser(email);
  }

  async function logout() {
    await AsyncStorage.removeItem("user");
    setUser(null);
  }

  return { user, loading, login, logout };
}
