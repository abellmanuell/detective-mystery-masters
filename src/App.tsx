import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { shopAllCategory } from "./lib/globalVariables";

import HomePageRoute from "./pages/routes/homepage/HomePageRoute";
// import ProductRoute from "./pages/routes/product/ProductRoute";
import AboutUsRoute from "./pages/routes/about-us/AboutUsRoute";
import CategoryRoute from "./pages/routes/category-page/CategoryRoute";
import FAQRoute from "./pages/routes/faq/FAQRoute";
import ProductsRoute from "./pages/routes/product/ProductsRoute";
import ProductRoute from "./pages/routes/product/ProductRoute";

const router = createBrowserRouter([
  {
    index: true,
    Component: HomePageRoute,
  },
  {
    path: "/faq",
    Component: FAQRoute,
  },
  {
    path: "/about-us",
    Component: AboutUsRoute,
  },
  {
    path: "/all-products",
    element: (
      <CategoryRoute
        {...shopAllCategory}
        title={shopAllCategory.title}
        subTitle={shopAllCategory.subTitle}
        breadCrumbs={shopAllCategory.breadCrumbs}
      />
    ),
    children: [
      {
        index: true,
        element: <ProductsRoute {...shopAllCategory} />,
      },
      {
        // path: "productId",
        element: <ProductRoute />,
      },
    ],
  },
  {
    path: "/productId",
    element: <ProductRoute />,
  },
  {
    path: "/case-games",
    element: <CategoryRoute {...shopAllCategory} />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
