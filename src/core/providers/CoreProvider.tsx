import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import useCachedResources from "core/hooks/useCachedResources";
import { ViewProps } from "core/components/Themed";

interface CoreProviderProps extends ViewProps {}

function CoreProvider({ children }: CoreProviderProps) {
  const isLoadingComplete = useCachedResources();
  if (isLoadingComplete === false) {
    return null;
  }

  return (
    <SafeAreaProvider>
      {children}

      <StatusBar />
    </SafeAreaProvider>
  );
}

export default CoreProvider;
