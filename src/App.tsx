import { Routes, Route } from "react-router-dom";

import SigninForms from "./_auth/forms/SigninForms";
import SingupForm from "./_auth/forms/SingupForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";
import "./global.css";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes  */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForms />} />
          <Route path="/sign-up" element={<SingupForm />} />
        </Route>

        {/* private routes  */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
