import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/router";

function App() {
  return (
    <div className="dark:bg-slate-700">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
