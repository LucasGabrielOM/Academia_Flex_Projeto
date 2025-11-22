// App.js — Base de navegação + menus (SEM arrow function e SEM classes)
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

// -------------------------------------------------------------
// DESCRIÇÃO: Componente de Breadcrumb (trilha simples).
// Uso didático: recebe um array de passos e mostra "Home > Página".
// -------------------------------------------------------------
function Breadcrumb(props) {
  var trail = props.trail || ["Home"];
  return (
    <View style={styles.breadcrumb}>
      <Text style={styles.breadcrumbText}>{trail.join(" > ")}</Text>
    </View>
  );
}

// -------------------------------------------------------------
// DESCRIÇÃO: Navbar horizontal custom (inferior).
// Botões grandes que chamam navigation.navigate("Rota").
// Mantemos igual em todas as telas para facilitar a navegação.
// -------------------------------------------------------------
function Navbar(props) {
  var navigation = props.navigation;
  return (
    <View style={styles.navbar}>
      <Pressable style={styles.navItem} onPress={function(){ navigation.navigate("Home"); }}>
        <Text style={styles.navText}>🏠 Home</Text>
      </Pressable>
      <Pressable style={styles.navItem} onPress={function(){ navigation.navigate("Treinos"); }}>
        <Text style={styles.navText}>🏋️ Treinos</Text>
      </Pressable>
      <Pressable style={styles.navItem} onPress={function(){ navigation.navigate("Links"); }}>
        <Text style={styles.navText}>🔗 Links</Text>
      </Pressable>
    </View>
  );
}

// -------------------------------------------------------------
// DESCRIÇÃO: Menu vertical (lista em coluna) dentro de uma página.
// Simula “menu lateral” sem precisar de Drawer.
// -------------------------------------------------------------
function VerticalMenu(props) {
  var onNavigate = props.onNavigate;
  return (
    <View style={styles.verticalMenu}>
      <Text style={styles.verticalTitle}>Menu (Vertical)</Text>

      <Pressable style={styles.verticalItem} onPress={function(){ onNavigate("Home"); }}>
        <Text style={styles.verticalText}>Ir para Home</Text>
      </Pressable>

      <Pressable style={styles.verticalItem} onPress={function(){ onNavigate("Treinos"); }}>
        <Text style={styles.verticalText}>Página Treinos</Text>
      </Pressable>

      <Pressable style={styles.verticalItem} onPress={function(){ onNavigate("Links"); }}>
        <Text style={styles.verticalText}>Página Links</Text>
      </Pressable>
    </View>
  );
}

// -------------------------------------------------------------
// DESCRIÇÃO: Tela Home (página inicial).
// Mostra breadcrumb, conteúdo exemplo e navbar.
// -------------------------------------------------------------
function HomeScreen(props) {
  var navigation = props.navigation;
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Breadcrumb trail={["Home"]} />

        <Text style={styles.h1}>ACADEMIA FLEX</Text>
        <Text style={styles.paragraph}>
          Bem-vindo! Esta é a página inicial (Home). Aqui você pode mostrar
          cartões do treino do dia, progresso semanal e atalhos rápidos.
        </Text>

        <Pressable
          style={styles.primaryBtn}
          onPress={function(){ navigation.navigate("Treinos"); }}
        >
          <Text style={styles.primaryBtnText}>Ver meus Treinos</Text>
        </Pressable>

        <Pressable
          style={styles.secondaryBtn}
          onPress={function(){ navigation.navigate("Links"); }}
        >
          <Text style={styles.secondaryBtnText}>Abrir página de Links</Text>
        </Pressable>
      </ScrollView>

      <Navbar navigation={navigation} />
    </View>
  );
}

// -------------------------------------------------------------
// DESCRIÇÃO: Tela Treinos (página secundária).
// Inclui o Menu Vertical custom, simulando um menu lateral.
// -------------------------------------------------------------
function TreinosScreen(props) {
  var navigation = props.navigation;
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Breadcrumb trail={["Home", "Treinos"]} />

        <Text style={styles.h1}>Treinos</Text>
        <Text style={styles.paragraph}>
          Página secundária exemplo. Você pode listar treinos, séries, repetições
          e botões para detalhes do exercício.
        </Text>

        {/* Menu vertical (simula um “menu lateral”) */}
        <VerticalMenu onNavigate={function(route){ navigation.navigate(route); }} />

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Treino de Hoje</Text>
          <Text style={styles.cardText}>Peito e tríceps • 45 min</Text>
          <Pressable
            style={styles.primaryBtn}
            onPress={function(){ navigation.navigate("Home"); }}
          >
            <Text style={styles.primaryBtnText}>Concluir e voltar à Home</Text>
          </Pressable>
        </View>
      </ScrollView>

      <Navbar navigation={navigation} />
    </View>
  );
}

// -------------------------------------------------------------
// DESCRIÇÃO: Tela Links (internos e externos).
// Interno: navega para outras rotas do app.
// Externo: abre um site no navegador com Linking.openURL.
// -------------------------------------------------------------
function LinksScreen(props) {
  var navigation = props.navigation;

  function abrirSite() {
    // Exemplo de link externo
    Linking.openURL("https://reactnative.dev/");
  }

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Breadcrumb trail={["Home", "Links"]} />

        <Text style={styles.h1}>Links</Text>
        <Text style={styles.paragraph}>
          Aqui demonstramos links internos (entre telas) e externos (site/app).
        </Text>

        <Text style={styles.sectionTitle}>Links Internos</Text>
        <Pressable
          style={styles.secondaryBtn}
          onPress={function(){ navigation.navigate("Home"); }}
        >
          <Text style={styles.secondaryBtnText}>Ir para Home</Text>
        </Pressable>

        <Pressable
          style={styles.secondaryBtn}
          onPress={function(){ navigation.navigate("Treinos"); }}
        >
          <Text style={styles.secondaryBtnText}>Ir para Treinos</Text>
        </Pressable>

        <Text style={styles.sectionTitle}>Link Externo</Text>
        <Pressable style={styles.primaryBtn} onPress={abrirSite}>
          <Text style={styles.primaryBtnText}>Abrir Documentação React Native</Text>
        </Pressable>
      </ScrollView>

      <Navbar navigation={navigation} />
    </View>
  );
}

// -------------------------------------------------------------
// DESCRIÇÃO: Configuração do Stack Navigator (rotas).
// Define as páginas do app e seus títulos.
// -------------------------------------------------------------
var Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#0d0d0d" },
          headerTintColor: "#fff",
          contentStyle: { backgroundColor: "#0d0d0d" },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Início" }} />
        <Stack.Screen name="Treinos" component={TreinosScreen} options={{ title: "Treinos" }} />
        <Stack.Screen name="Links" component={LinksScreen} options={{ title: "Links" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// -------------------------------------------------------------
// DESCRIÇÃO: Componente raiz do app.
// -------------------------------------------------------------
function App() {
  return <AppNavigator />;
}

// -------------------------------------------------------------
// ESTILOS (cores escuras + detalhes em vermelho, fácil de ler).
// -------------------------------------------------------------
var styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#0d0d0d" },
  content: { padding: 20, paddingBottom: 100 },
  h1: { color: "#ff2a2a", fontSize: 24, fontWeight: "bold", marginBottom: 8 },
  paragraph: { color: "#ddd", fontSize: 15, lineHeight: 22, marginBottom: 16 },

  sectionTitle: { color: "#fff", fontSize: 16, fontWeight: "bold", marginTop: 16, marginBottom: 8 },

  // Breadcrumb
  breadcrumb: { paddingVertical: 6, marginBottom: 10 },
  breadcrumbText: { color: "#aaa", fontSize: 13 },

  // Navbar (horizontal)
  navbar: {
    position: "absolute",
    left: 0, right: 0, bottom: 0,
    flexDirection: "row",
    backgroundColor: "#111",
    borderTopWidth: 1, borderTopColor: "#222",
    paddingVertical: 10, paddingHorizontal: 12,
    justifyContent: "space-around",
  },
  navItem: { paddingVertical: 8, paddingHorizontal: 10 },
  navText: { color: "#ff2a2a", fontWeight: "bold" },

  // Menu vertical
  verticalMenu: {
    backgroundColor: "#141414",
    borderWidth: 1, borderColor: "#232323",
    borderRadius: 12, padding: 12, marginBottom: 16,
  },
  verticalTitle: { color: "#fff", fontWeight: "bold", marginBottom: 8 },
  verticalItem: {
    paddingVertical: 10, paddingHorizontal: 12,
    backgroundColor: "#1a1a1a",
    borderRadius: 8, marginBottom: 8,
    borderWidth: 1, borderColor: "#2a2a2a",
  },
  verticalText: { color: "#ddd" },

  // Cards e botões
  card: {
    backgroundColor: "#141414",
    borderRadius: 12, padding: 16, marginBottom: 16,
    borderWidth: 1, borderColor: "#232323",
  },
  cardTitle: { color: "#fff", fontSize: 18, fontWeight: "bold", marginBottom: 6 },
  cardText: { color: "#ccc" },

  primaryBtn: {
    backgroundColor: "#ff2a2a",
    paddingVertical: 12, paddingHorizontal: 14,
    borderRadius: 10, marginTop: 10,
  },
  primaryBtnText: { color: "#fff", fontWeight: "bold", textAlign: "center" },

  secondaryBtn: {
    backgroundColor: "#222",
    paddingVertical: 12, paddingHorizontal: 14,
    borderRadius: 10, marginTop: 10,
    borderWidth: 1, borderColor: "#333",
  },
  secondaryBtnText: { color: "#fff", textAlign: "center" },
});

export default App;
