import { Routes, Route } from "react-router-dom";

import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";
import "./global.css";
import { Toaster } from "./components/ui/toaster";
import SignInForms from "./_auth/forms/SigninForms";
import SignUpForm from "./_auth/forms/SingupForm";


const App = () => {
  return (
    <main className="flex h-screen">
     
        <Routes>
          {/* public routes  */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInForms />} />
            <Route path="/sign-up" element={<SignUpForm />} />
          </Route>

          {/* private routes  */}
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
        
      <Toaster />
    </main>
  );
};

export default App;
