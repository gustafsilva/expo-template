import React from "react";

import useColorScheme from "core/hooks/useColorScheme";
import CoreProvider from "core/providers/CoreProvider";

import Navigation from "features/navigation";

function AppRoot() {
  const colorScheme = useColorScheme();

  return (
    <CoreProvider>
      <Navigation colorScheme={colorScheme} />
    </CoreProvider>
  );
}

export default AppRoot;
