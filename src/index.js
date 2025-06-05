import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ItemProvider } from "./context/ItemContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ItemProvider>
      <App />
    </ItemProvider>
  </BrowserRouter>
);
