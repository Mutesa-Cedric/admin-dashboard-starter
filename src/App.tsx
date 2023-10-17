import { Toaster } from "react-hot-toast";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Overview from "./pages/Overview";
import Users from "./pages/Users";
import Home from "./pages/Home";
import DashboardLayout from "./components/layouts/DashboardLayout";

function App() {

  return (
    <RecoilRoot>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="" element={<Overview />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </RecoilRoot>
  )
}

export default App
