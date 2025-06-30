import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routerConfig } from "./routes";
import "./styles/index.css";

const root = createRoot(document.getElementById("root")!);

root.render(<RouterProvider router={routerConfig} />);
