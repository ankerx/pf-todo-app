import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import { Provider } from "react-redux";
import { setupStore } from "./redux/store";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as Element);

root.render(
  <Provider store={setupStore()}>
    <App />
  </Provider>
);
