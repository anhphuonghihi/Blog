import { Outlet, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "@internals/components";
import { Home,Education } from "@internals/pages";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Home title="Trang chủ - ViewSonic Việt Nam | Website Chính Thức" />
            }
          />
        </Route>
        <Route element={<Layout />}>
          <Route
            path="/education"
            element={
              <Education title="Giải Pháp Giáo Dục ViewSonic" />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

const Layout = () => {
  return (
    <>
      <div
        style={{
          minHeight: "calc(100vh - 80px)",
        }}
      >
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
