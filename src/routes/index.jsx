import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homepage";
import UserList from "../pages/homepage/components/user-list/index";
import PostList from "../pages/posts";
import AlbumLists from "../pages/albums";
import PhotoAlbums from "../pages/photos";
import CommentList from "../pages/comments";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "users",
        index: true,
        element: <UserList />,
      },
      {
        path: "posts/:userId",
        index: true,
        element: <PostList />,
      },
      {
        path: "albums/:userId",
        index: true,
        element: <AlbumLists />,
      },
      {
        path: "photos/:albumId",
        index: true,
        element: <PhotoAlbums />,
      },
      {
        path: "comments/:postId",
        index: true,
        element: <CommentList />,
      },
    ],
  },
]);

export default router;
