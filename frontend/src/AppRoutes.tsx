import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layouts";
import HomePage from "./pages/Homepage";
import AuthCallbackPage from "./pages/AuthCallbackPage";

const AppRoutes =()=>{
    return(
        <Routes>
            <Route path="/auth-callback" element={<AuthCallbackPage/>}/>
            <Route path="/" element={<Layout><HomePage/></Layout>}/>
            <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>

    );


};

export default AppRoutes;