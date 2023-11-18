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
// import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ManageStaff from "../Pages/ManageStaff/ManageStaff";
import ManageSpso from "../Pages/ManageSpso/ManageSpso";
import HomeNoLogin from "../Pages/HomeNoLogin/HomeNoLogin";

const publicRoutes = [
  // { role: "", path: "*", component: ErrorPage },
  { role: "", path: "/", component: HomeNoLogin, layout: "beforeLogin" },
  { role: "", path: "/Login", component: Login },
  { role: "", path: "/Test", component: Test },
  {
    role: "",
    path: "/SPS-FE-Project",
    component: HomeNoLogin,
    layout: "beforeLogin",
  },
];

const privateRoutes = [
  { role: "all", path: "/Home", component: Home, layout: "default" },
  { role: "all", path: "/Support", component: Support, layout: "default" },
  {
    role: "student",
    path: "/Printing/:PrinterID",
    component: ConfigFile,
    layout: "default",
  },
  {
    role: "student",
    path: "/Printing",
    component: Printing,
    layout: "default",
  },
  { role: "student", path: "/Bkpay", component: Bkpay },
  { role: "student", path: "/History", component: History, layout: "default" },
  {
    role: "staff",
    path: "/ManageStaff",
    component: ManageStaff,
    layout: "default",
  },
  { role: "spso", path: "/Config", component: Config, layout: "default" },
  {
    role: "spso",
    path: "/ManageSpso",
    component: ManageSpso,
    layout: "default",
  },
  { role: "spso", path: "/Report", component: Report, layout: "default" },
  {
    role: "spso",
    path: "/Activities",
    component: Activities,
    layout: "default",
  },
];

export { publicRoutes, privateRoutes };
