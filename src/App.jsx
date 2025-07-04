import { Routes, Route } from "react-router-dom";

import Biography from "./components/Biography";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import FormFooter from "./components/FormFooter";
import Header from "./components/Header"
import Hero from "./components/Hero";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";

const App = () =>  {
  return (
    <Routes>
      <Route path="/"
      element = {
      <>
        <Header/>
        <Hero/>
        <Biography/>
        <Blogs/>
        <FormFooter/>
        <Footer/>
      </>
      }
      />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/blogs" element={<BlogPage/>} />
    </Routes>
  )
}

export default App;
