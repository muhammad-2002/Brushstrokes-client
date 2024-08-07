import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import AddCraft from "../components/Add Craft/AddCraft";
import Details_Carft_item from "../components/Details_Carft_item/Details_Carft_item";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import SignIn from "../components/SignIn/SignIn";
import SubCategories from "../components/SubCategories/SubCategories";
import UpdateArtAndCraft from "../components/UpdateArt&Craft/UpdateArtAndCraft";
import Register from "../components/register/Register";
import ArtCraftDetails from "../pages/A&C_Details/Art&CraftDetails";
import Home from "../pages/Home";
import MyArt from "../pages/MyArt/MyArt";
import AllCraft from "./../pages/All Craft item/AllCraft";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
          fetch(`https://brushstrock.vercel.app/items/${params.id}`),
        element: (
          <PrivateRoute>
            <ArtCraftDetails></ArtCraftDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-art&craft/:email",
        element: (
          <PrivateRoute>
            <MyArt></MyArt>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-art&carft/:id",
        element: <UpdateArtAndCraft></UpdateArtAndCraft>,
      },
      {
        path: "/details_craft_item/:id",
        element: <Details_Carft_item></Details_Carft_item>,
      },
      {
        path: "/sub-categories/:sub_catetagory_name",
        element: <SubCategories></SubCategories>,
      },
    ],
  },
]);

export default router;
