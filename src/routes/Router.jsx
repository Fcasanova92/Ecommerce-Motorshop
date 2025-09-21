

import { Home } from "@/components/Home"
import { Route, Routes } from "react-router"
import {PublicRouter} from "@/routes/components/PublicRouter"
import {PrivateRouter} from "@/routes/components/PrivateRouter"

export const Router = () => {

    return(
        <Routes>
            <Route path="/*" element={<PublicRouter />}/>
            <Route path="/" element={<PrivateRouter><Home/></PrivateRouter>} />
        </Routes>
    )
}
