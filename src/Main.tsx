import ReactDom from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";

ReactDom.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
