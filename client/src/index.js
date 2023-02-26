import ReactDOM from "react-dom";
import { ContextProvider } from "./components/SocketContext";
import App from "./App";
import "./styles.css";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
