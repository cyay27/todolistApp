import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import TodoList from './components/MyTodolist';

export default function App() {
  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.container}
      >
         <View style={styles.card}>
          <TodoList />
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ff5733',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#febeb0',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#111',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: '90%',
  },
});