import "@/styles/global.css";
import { store } from "@/app/Redux/store.ts";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
