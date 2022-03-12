import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dash from "./pages/Dash";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
function app() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="blogs" element={<Blogs />} /> */}
          <Route path="profile" element={<Profile />} />
          <Route path="dashboard" element={<Dash />} />
        </Routes>
      </BrowserRouter>
      {/* <Header /> */}
      {/* <Profile /> */}
      {/* <Dash /> */}
    </div>
  );
}

export default app;
