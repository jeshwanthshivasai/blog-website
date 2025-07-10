import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Header from "./components/Header";
import Biography from "./components/Biography";
import Blogs from "./components/Blogs";
import FormFooter from "./components/FormFooter";
import Footer from "./components/Footer";

import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./components/BlogDetailPage";

const App = () =>  {
  return (
    <>
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
      <Route path="/blogs/:slug" element={<BlogDetailPage/>} />
    </Routes>
    </>
  )
}

export default App;
