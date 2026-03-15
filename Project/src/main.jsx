import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store.js";
import Protected from "./components/AuthLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import AllPostPage from "./pages/AllPostPage.jsx";
import AddPostPage from "./pages/AddPostPage.jsx";
import EditPostPage from "./pages/EditPostPage.jsx";
import PostPage from "./pages/PostPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: (
          <Protected authenticated={false}>
            <LoginPage />
          </Protected>
        ),
      },
      {
        path: "/signup",
        element: (
          <Protected authenticated={false}>
            <SignupPage />
          </Protected>
        ),
      },
      {
        path: "all-posts",
        element: (
          <Protected authenticated={true}>
            <AllPostPage />
          </Protected>
        ),
      },
      {
        path: "/add-post",
        element: (
          <Protected authenticated={true}>
            <AddPostPage />
          </Protected>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <Protected authenticated={true}>
            <EditPostPage />
          </Protected>
        ),
      },
      {
        path: "/post/:slug",
        element: <PostPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
