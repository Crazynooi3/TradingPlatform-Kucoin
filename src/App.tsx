import { Router } from "@/router/routes";
import { darkTheme, lightTheme } from "@/styles/ant.theme";
import { ConfigProvider } from "antd";
import { useAppSelector } from "./app/Redux/hooks";
import { selectThemeMode } from "./features/Theme/theme.selectors";

function App() {
  const themeMode = useAppSelector(selectThemeMode);

  // const theme: string = "light";
  // const theme: string = "dark";

  return (
    <ConfigProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
      <div className={themeMode}>
        <Router />
      </div>
    </ConfigProvider>
  );
}

export default App;
