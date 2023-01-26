/**
 * Learn more about deep LINKING with React Navigation
 * https://reactnavigation.org/docs/deep-LINKING
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "navigation/types";
import PATHS from "navigation/constants/Paths";

const LINKING: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: PATHS.Home,
            },
          },
          Settings: {
            screens: {
              SettingsScreen: PATHS.Settings,
            },
          },
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default LINKING;
