import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useSelector } from 'react-redux'
import PublicRoutes from "./PublicRoutes"
import PrivateRoutes from "./PrivateRoutes"
import { RootState } from "../redux/store"

export default () => {
    const { user } = useSelector((state: RootState) => state.auth)

    return (
        <BrowserRouter>
            {
                user ?
                    <PrivateRoutes />
                    :
                    <PublicRoutes />
            }
        </BrowserRouter>
    )
}