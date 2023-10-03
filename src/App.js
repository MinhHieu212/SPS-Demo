import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./Routes/PageList";
import DefaultLayout from "./Layouts/DefaultLayout";
import EmptyLayout from "./Layouts/EmptyLayout";

function App() {
  return (
    <div>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = route.layout ? DefaultLayout : EmptyLayout;
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
