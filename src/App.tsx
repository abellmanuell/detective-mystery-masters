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
    ],
  },
  {
    path: "/detective-cases",
    element: (
      <CategoryRoute
        title="Detective Cases"
        subTitle={shopAllCategory.subTitle}
        breadCrumbs={shopAllCategory.breadCrumbs}
      />
    ),
    children: [
      {
        index: true,
        element: <ProductsRoute />,
      },
    ],
  },
  {
    path: "/escape-rooms",
    element: (
      <CategoryRoute
        title="Escape Rooms"
        subTitle={shopAllCategory.subTitle}
        breadCrumbs={shopAllCategory.breadCrumbs}
      />
    ),
    children: [
      {
        index: true,
        element: <ProductsRoute />,
      },
    ],
  },
  {
    path: "/card-games",
    element: (
      <CategoryRoute
        title="Card Games"
        subTitle={shopAllCategory.subTitle}
        breadCrumbs={shopAllCategory.breadCrumbs}
      />
    ),
    children: [
      {
        index: true,
        element: <ProductsRoute />,
      },
    ],
  },
  {
    path: "/case-games",
    element: (
      <CategoryRoute
        title="Case Games"
        subTitle={shopAllCategory.subTitle}
        breadCrumbs={shopAllCategory.breadCrumbs}
      />
    ),
    children: [
      {
        index: true,
        element: <ProductsRoute />,
      },
    ],
  },
  {
    path: "/print-and-play",
    element: (
      <CategoryRoute
        title="Print & Play"
        subTitle={shopAllCategory.subTitle}
        breadCrumbs={shopAllCategory.breadCrumbs}
      />
    ),
    children: [
      {
        index: true,
        element: <ProductsRoute />,
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
