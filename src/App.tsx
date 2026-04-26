import { Router } from "@/router/routes";
import { darkTheme, lightTheme } from "@/styles/ant.theme";
import { ConfigProvider } from "antd";

function App() {
  // const theme: string = "light";
  const theme: string = "dark";

  return (
    <ConfigProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <div className={theme}>
        <Router />
      </div>
    </ConfigProvider>
  );
}

export default App;
