import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import PublicRoutes from "./PublicRoutes"
import PrivateRoutes from "./PrivateRoutes"
import { RootState } from "../redux/store"
import { useEffect } from 'react'
import { auth } from "../../firebase.config"
import { onAuthStateChanged } from "firebase/auth"
import { setUser } from "../redux/features/authSlice"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default () => {
    const { user, loading } = useSelector((state: RootState) => state.auth)

    const dispatch = useDispatch()

    useEffect(
        () => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    dispatch(setUser(user))
                } else {
                    dispatch(setUser(null))
                }
            })
        }, [user]
    )

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }


    return (
        <BrowserRouter>
            <ToastContainer />
            {
                user ?
                    <PrivateRoutes />
                    :
                    <PublicRoutes />
            }
        </BrowserRouter>
    )
}