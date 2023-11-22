import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./Routes/PageList";
import DefaultLayout from "./Layouts/DefaultLayout";
import BeforeLogin from "./Layouts/BeforeLogin";
import EmptyLayout from "./Layouts/EmptyLayout";
import { useRole } from "./Contexts/RoleContext";
import { useEffect } from "react";
import { UserInfoAPI } from "./APIs/UserInfoAPI/UserInfoAPI";
import { useUserInfo } from "./Contexts/UserInfoContext";

function renderRoutes(routes, role = "") {
  return routes.map((route, index) => {
    let Layout;
    if (!route.layout) {
      Layout = EmptyLayout;
    } else if (route.layout === "beforeLogin") {
      Layout = BeforeLogin;
    } else {
      Layout = DefaultLayout;
    }
    const Page = route.component;

    if (route.role === role || route.role === "all") {
      // console.log("OKE", route.path);
      return (
        <Route
          key={index}
          path={route.path}
          element={
            <Layout>
              <Page />
            </Layout>
          }
        ></Route>
      );
    } else {
      // console.log("NOT HAVE", route.path);
    }
  });
}

function App() {
  const roleContext = useRole();
  const userInfoContext = useUserInfo();

  // console.log("RoleContext", roleContext);

  useEffect(() => {
    const handleReload = async () => {
      const userInformation = await UserInfoAPI();

      await roleContext.updateRole(userInformation?.data?.data?.role);
      await userInfoContext.updateUserInfo(userInformation?.data?.data);
    };
    handleReload();
  }, []);

  return (
    <Routes>
      {renderRoutes(publicRoutes)}
      {roleContext.role !== "" && renderRoutes(privateRoutes, roleContext.role)}
    </Routes>
  );
}

export default App;
