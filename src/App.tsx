import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <RecoilRoot>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </RecoilRoot>
  )
}

export default App
