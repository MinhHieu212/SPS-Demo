import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./Routes/PageList";
import DefaultLayout from "./Layouts/DefaultLayout";
import BeforeLogin from "./Layouts/BeforeLogin";
import EmptyLayout from "./Layouts/EmptyLayout";

function App() {
  return (
    <div>
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layout;
          if (!route.layout) {
            Layout = EmptyLayout;
          } else if (route.layout === "beforeLogin") {
            Layout = BeforeLogin;
          } else {
            Layout = DefaultLayout;
          }
          const Page = route.component;

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
        })}
      </Routes>
    </div>
  );
}

export default App;
