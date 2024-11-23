import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ManageProducts from "./pages/ManageProducts";
import { Toaster } from "react-hot-toast";
import Product from "./pages/Product";
import ProtectedRoute from "./ui/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/domov" />} />
            <Route path="domov" element={<Home />} />
            <Route path="produkty" element={<Products />} />
            <Route path="produkty/:productId" element={<Product />} />
            <Route path="kontakt" element={<Contact />} />

            {/* Protected Admin route with nested routes */}
            <Route
              path="admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            >
              <Route path="sprava-produktov" element={<ManageProducts />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={
          ({ succes: { duration: 3000 } },
          { error: { duration: 3000 } },
          {
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-50)",
              color: "var(--color-grey-900)",
              fontWeight: "500",
            },
          })
        }
      />
    </QueryClientProvider>
  );
}

export default App;
