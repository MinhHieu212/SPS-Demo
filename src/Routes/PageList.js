import Home from "../Pages/Home/Home";
import Printing from "../Pages/Printing/Printing";
import Support from "../Pages/Support/Support";
import History from "../Pages/History/History";
import Login from "../Pages/Login/Login";
import Report from "../Pages/Report/Report";
import Config from "../Pages/Config/Config";
import Activities from "../Pages/Activities/Activities";
import Test from "../Pages/TestModal/Test";
import ConfigFile from "../Pages/ConfigFile/ConfigFile";
import Bkpay from "../Pages/Bkpay/BkPay";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ManageStaff from "../Pages/ManageStaff/ManageStaff";
import ManageSpso from "../Pages/ManageSpso/ManageSpso";
import HomeNoLogin from "../Pages/HomeNoLogin/HomeNoLogin";

// no required login
const publicRoutes = [
  {
    role: "Student",
    path: "/Printing/:PrinterID",
    component: ConfigFile,
    layout: "default",
  },
  {
    role: "Student",
    path: "/Printing",
    component: Printing,
    layout: "default",
  },
  { role: "Student", path: "/History", component: History, layout: "default" },
  { role: "Spso", path: "/Config", component: Config, layout: "default" },
  {
    role: "Staff",
    path: "/ManageStaff",
    component: ManageStaff,
    layout: "default",
  },
  {
    role: "Spso",
    path: "/ManageSpso",
    component: ManageSpso,
    layout: "default",
  },
  { role: "Spso", path: "/Report", component: Report, layout: "default" },
  {
    role: "Spso",
    path: "/Activities",
    component: Activities,
    layout: "default",
  },
  {
    role: " ",
    path: "/SPS-FE-Project",
    component: HomeNoLogin,
    layout: "beforeLogin",
  },
  { role: "", path: "/", component: HomeNoLogin, layout: "beforeLogin" },
  { role: "", path: "/Home", component: Home, layout: "default" },
  { role: "", path: "/Support", component: Support, layout: "default" },
  { role: "", path: "/Login", component: Login },
  { role: "", path: "/Bkpay", component: Bkpay },
  { role: "", path: "/Test", component: Test },
  { role: "", path: "*", component: ErrorPage },
];

// required login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
