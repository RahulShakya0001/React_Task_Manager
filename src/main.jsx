import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
   </Provider>
);
