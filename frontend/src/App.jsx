import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TestPage from "./pages/TestPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Outlet";
import Services from "./pages/Services";
import Test from "./pages/Test";
import Hr from "./pages/hr";
import MyBarChart from "./pages/bargraph";

function App() {
  return (
    <>
      <Routes>
        {/* Routes with Navbar */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/testpage" element={<TestPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Route>

        {/* Routes without Navbar */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/test" element={<Test />} />
        <Route path="/hr" element={<Hr />} />
        <Route path="/graph" element={<MyBarChart />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
