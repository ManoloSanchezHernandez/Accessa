import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Navegation from './Navegation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Navegation />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
