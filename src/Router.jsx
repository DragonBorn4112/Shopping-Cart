import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Cart from "./Components/Cart/Cart.jsx";
import Landing from "./Components/Landing/Landing.jsx";
import Product from "./Components/Product/Product.jsx";
import Root from "./Components/Root/Root.jsx";
import Shop from "./Components/Shop/Shop.jsx";

function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/",
                    element: <Landing />,
                },
                {
                    path: "/shop",
                    element: <Shop />,
                    loader: async () => {
                        const res = await fetch("https://fakestoreapi.com/products");
                        const data = await res.json();
                        return data;
                    },
                },
                {
                    path: "/cart",
                    element: <Cart />,
                },
                {
                    path: "/product/:productId",
                    element: <Product />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />
}

export default Router;