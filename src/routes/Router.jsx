


import { Route, Routes } from "react-router"
import {PublicRouter} from "@/routes/components/PublicRouter"
import {PrivateRouter} from "@/routes/components/PrivateRouter"
import { Home } from "@/pages/Home"
import { PathConfig } from "@/utils/pathConfig"
import { Product } from "@/pages/Product"
import { Cart } from "@/pages/Cart"

export const Router = () => {

    return(
        <Routes>
            <Route path="/*" element={<PublicRouter />}/>
            <Route path={PathConfig.Home} element={<PrivateRouter><Home/></PrivateRouter>} />
            <Route path={PathConfig.Product} element={<PrivateRouter><Product/></PrivateRouter>} />
            <Route path={PathConfig.Cart} element={<PrivateRouter><Cart/></PrivateRouter>} />
        </Routes>
    )
}
