import React from "react";

import CoreProvider from "core/providers/CoreProvider";

import NavigationProvider from "features/navigation/providers/NavigationProvider";

function AppRoot() {
  return (
    <CoreProvider>
      <NavigationProvider />
    </CoreProvider>
  );
}

export default AppRoot;
