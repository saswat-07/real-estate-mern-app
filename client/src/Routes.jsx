import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
// import About from "./pages/About"
// import Home from "./pages/Home"
import { Footer, Header, PrivateRoute, LoadingDot } from "./components"

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const SignIn = lazy(() => import("./pages/SignIn"))
const SignUp = lazy(() => import("./pages/SignUp"))
const Profile = lazy(() => import("./pages/Profile"))
const Search = lazy(() => import("./pages/Search"))
const Listing = lazy(() => import("./pages/Listing"))
const CreateListing = lazy(() => import("./pages/CreateListing"))
const UpdateListing = lazy(() => import("./pages/UpdateListing"))

function ProjectRoutes() {
  return (
    <Suspense fallback={<LoadingDot />}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path='/search' element={<Search />} />
          <Route path='/listing/:listingId' element={<Listing />} />

          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/create-listing' element={<CreateListing />} />
            <Route path='/update-listing/:listingId' element={<UpdateListing />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  )
}

export default ProjectRoutes
