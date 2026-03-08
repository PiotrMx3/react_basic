import {createContext} from "react";

export interface ISettingsContext {
  color: string;
  onSetColor: (color: string) => void;
}

export const SettingsContext = createContext<ISettingsContext>({
  color: "red",
  onSetColor() {},
});
