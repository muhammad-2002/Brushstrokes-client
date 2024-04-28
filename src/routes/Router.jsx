import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import AddCraft from "../components/Add Craft/AddCraft";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import SignIn from "../components/SignIn/SignIn";
import Register from "../components/register/Register";
import ArtCraftDetails from "../pages/A&C_Details/Art&CraftDetails";
import Home from "../pages/Home";
import AllCraft from "./../pages/All Craft item/AllCraft";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/SignIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add_craft",
        element: (
          <PrivateRoute>
            <AddCraft></AddCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/all_craft_item",
        element: <AllCraft></AllCraft>,
      },
      {
        path: "/art&craft_details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/items/${params.id}`),
        element: (
          <PrivateRoute>
            <ArtCraftDetails></ArtCraftDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
