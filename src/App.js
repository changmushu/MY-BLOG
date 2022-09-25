import Home from "./pages/home/Home";

import Single from "./pages/single/Single"
import Single1 from "./pages/single/Single1";
import Single2 from "./pages/single/Single2";
import Single3 from "./pages/single/Single3";
import About from "./pages/About/About";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";

import Register from "./pages/Register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginTest from "./pages/Login/LoginTest";


function App() {
  const user = true;
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/Register" element={user ? (<Register/>):(<LoginTest/>)}>
          </Route>
          <Route path="/LoginTest" element={<LoginTest/>}>
          </Route>
          <Route path="/write" element={user ? (<Write/>):(<LoginTest/>)}>
          </Route>
          <Route path="/setting" element={user ? (<Setting/>):(<LoginTest/>)}>
          </Route>
          <Route path="/post/:postId" element={<Single/>}>
          </Route>
          <Route path="/single" element={<Single/>}>
          </Route>
          <Route path="/single1" element={<Single1/>}>
          </Route>
          <Route path="/single2" element={<Single2/>}>
          </Route>
          <Route path="/single3" element={<Single3/>}>
          </Route>
          <Route path="/about" element={<About/>}>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
