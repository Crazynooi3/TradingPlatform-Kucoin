import { Router } from "@/router/routes";
import { darkTheme, lightTheme } from "@/styles/ant.theme";
import { ConfigProvider } from "antd";
import { useAppDispatch, useAppSelector } from "./app/Redux/hooks";
import { selectThemeMode } from "./features/Theme/theme.selectors";
import { useEffect } from "react";
import { rehydrateUser } from "./features/User/user.slice";

function App() {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector(selectThemeMode);

  useEffect(() => {
    dispatch(rehydrateUser());
  }, []);

  return (
    <ConfigProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
      <div className={themeMode}>
        <Router />
      </div>
    </ConfigProvider>
  );
}

export default App;
