import { Login } from "@/components/auth/Login"
import { Register } from "@/components/auth/Register"
import { Route, Routes } from "react-router"


export const PublicRouter = () => {
    return(
        <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
        </Routes>
    )
}
