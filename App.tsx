// App.tsx
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  // C'est propre : App.tsx ne fait que charger la navigation
  return <AppNavigator />;
}