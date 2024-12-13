import { createBrowserRouter, Outlet } from "react-router-dom";
import SomethingWrong from "./pages/something-wrong";
import ThemeProvider from "./contexts/ThemeProvider";
import { lazy, Suspense } from "react";

const App = lazy(()=> import('./App'));

const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        element: (
            <ThemeProvider>
                <Outlet />
            </ThemeProvider>
        ),
        errorElement: <SomethingWrong />,
        children: [
            {
                id: "app",
                path: "/",
                element: (
                    <Suspense fallback={<p>Loading...</p>}>
                        <App />
                    </Suspense>
                ),
            },
        ],
    },
]);

export default router;