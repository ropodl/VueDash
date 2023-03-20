import { useTheme } from "vuetify";
export function useThemeMode() {
  return useTheme().global.current.value.dark;
}
