import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const Spaces = lazy(() => import("../pages/spaces/index"));
const Surfaces = lazy(() => import('../pages/surfaces/index.jsx'));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
// const AddEditAdvertisement = lazy(() =>
//   import("../pages/AddEditAdvertisement/index")
// );
/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      {
         path: "/spaces",
         exact: true,
         element: <Spaces />,
       },
       {
        path: "/surfaces/:id",
        exact: true,
        element: <Surfaces  />,
      },
      // {
      //   path: "/sua-bang-quang-cao/:AdvertisementId",
      //   exact: true,
      //   element: <AddEditAdvertisement isEdit={true} />,
      // },
      // {
      //   path: "/users",
      //   exact: true,
      //   element: <ListUser />,
      // },
    ],
  },
  { path: "*", element: <NotFound /> },
];

export default ThemeRoutes;
