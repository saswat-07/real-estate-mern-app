import { BrowserRouter, Routes, Route } from "react-router-dom"
// import About from "./pages/About"
// import Home from "./pages/Home"
import { 
  Home, 
  About, 
  SignUp, 
  SignIn, 
  Profile, 
  CreateListing, 
  UpdateListing, 
  Listing, 
  Search } from "./pages"
import { Footer, Header, PrivateRoute } from "./components"

function App() {
  return (
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
  )
}

export default App
