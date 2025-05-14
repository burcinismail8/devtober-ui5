import "@ui5/webcomponents-react/dist/Assets.js";
import ErrorScreenIllustration from "@ui5/webcomponents-fiori/dist/illustrations/ErrorScreen.js";
import {
  BreadcrumbsItem,
  IllustratedMessage,
  ThemeProvider,
} from "@ui5/webcomponents-react";
import { ReactNode, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, LoaderFunctionArgs } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./AppShell.tsx";
import { fetchToDos } from "./mockImplementations/mockAPIs.ts";
import { Todo } from "./mockImplementations/mockData.ts";
import Home from "./Home.tsx";
import Details from "./Details.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface SingleTodoHandle {
  getTitle: (todo?: Todo) => string | undefined;
  getBreadCrumbItems: (todo?: Todo) => ReactNode;
}

// To simulate a slow loader increase the `delay`, to simulate a failed request set `shouldThrow` to `true`
async function toDosLoader() {
  const todosPromise = fetchToDos({ delay: 500, shouldThrow: false });
  return { todos: todosPromise };
}

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <IllustratedMessage name={ErrorScreenIllustration} />,
        loader: toDosLoader,
      },
      {
        path: "/details/:movieId",
        element: <Details />,
        errorElement: <IllustratedMessage name={ErrorScreenIllustration} />,
        loader: toDosLoader,
      },
    ],
  },
]);
const queryClient = new QueryClient();
createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
