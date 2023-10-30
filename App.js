import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppTab from './AppTab'

export default function App() {
  return (
    <>
      <AppTab/>
      <StatusBar style='light'/>
    </>
  );
}
