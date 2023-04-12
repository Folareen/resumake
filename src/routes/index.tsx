import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useSelector } from 'react-redux'
import PublicRoutes from "./PublicRoutes"
import PrivateRoutes from "./PrivateRoutes"

export default () => {
    const { user } = useSelector(state => state.auth)

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