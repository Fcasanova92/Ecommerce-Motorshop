


import { Route, Routes } from "react-router"
import {PublicRouter} from "@/routes/components/PublicRouter"
import {PrivateRouter} from "@/routes/components/PrivateRouter"
import { Home } from "@/pages/Home"
import { PathConfig } from "@/utils/pathConfig"

export const Router = () => {

    return(
        <Routes>
            <Route path="/*" element={<PublicRouter />}/>
            <Route path={PathConfig.Home} element={<PrivateRouter><Home/></PrivateRouter>} />
        </Routes>
    )
}
