import { Landing, Error, Register, ProtectedRoute } from "./pages";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashboard";

const router = createBrowserRouter(
  // createRoutesFromElements(
  // <Routes>
  //   <Route
  //     path="/"
  //     element={
  //       <ProtectedRoute>
  //         <SharedLayout />
  //       </ProtectedRoute>
  //     }
  //   >
  //     <Route path="stats" index element={<Stats />} />
  //     <Route path="all-jobs" element={<AllJobs />} />
  //     <Route path="add-job" element={<AddJob />} />
  //     <Route path="profile" element={<Profile />} />
  //   </Route>
  //   <Route path="/landing" element={<Landing />} />
  //   <Route path="/register" element={<Register />} />
  //   <Route path="*" element={<Error />} />
  // </Routes>
  // )
  [
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <SharedLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "stats",
          element: <Stats />,
        },
        {
          path: "all-jobs",
          element: <AllJobs />,
        },
        {
          path: "add-job",
          element: <AddJob />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
    { path: "/landing", element: <Landing /> },
    { path: "/register", element: <Register /> },
    { path: "*", element: <Error /> },
  ]
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
