import { RootTabParamList } from "features/navigation/types";

const PATHS = {
  Home: "Home" as keyof RootTabParamList | string,
  Settings: "Settings" as keyof RootTabParamList | string,
};

export default PATHS;
