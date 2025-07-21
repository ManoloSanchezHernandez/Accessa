import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Navegation from './Navegation';

export default function App() {
  return (
    <PaperProvider>
      <Navegation />
    </PaperProvider>
  );
}
