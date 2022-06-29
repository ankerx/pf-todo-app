import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as Element);
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
