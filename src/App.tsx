import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./routes/home"
import Onboard from "./routes/onboard"
import Dashboard from "./routes/dashboard"
import Error from "./components/error/Error"
import RootLayout from "./RootLayout"






const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<Error />}>
      <Route  path="/" element={<RootLayout />} >
          <Route index element={<Home />}  />
          <Route path="/onboard" element={<Onboard />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  )
)


export default function App() {
  return <RouterProvider router={router} />
}
