import { BrowserRouter } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import PublicRoutes from "./PublicRoutes"
import PrivateRoutes from "./PrivateRoutes"
import { RootState } from "../redux/store"
import { useEffect } from 'react'
import { auth } from "../../firebase.config"
import { onAuthStateChanged } from "firebase/auth"
import { setLoading, setUser } from "../redux/features/authSlice"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'
import { saveResume } from "../redux/features/resumeSlice"
import Header from "../components/layouts/Header"
import { Grid } from 'react-loader-spinner'


export default () => {
    const { user, loading } = useSelector((state: RootState) => state.auth)

    const { resumeToSave } = useSelector((state: RootState) => state.resume)

    const dispatch = useDispatch()


    useEffect(
        () => {
            onAuthStateChanged(auth, async (user) => {
                try {
                    if (user) {
                        dispatch(setUser(user))
                        dispatch(setLoading(true))
                        if (resumeToSave) {
                            const resumeName = resumeToSave.name
                            if (resumeName) {
                                const resumeId = resumeName?.toLowerCase().split(' ').join('-')
                                await setDoc(doc(db, `${user.uid}-${user.email}`, resumeId), {
                                    title: resumeName,
                                    id: resumeId,
                                    resume: resumeToSave.res
                                })
                                toast.success('Resume saved successfully!')
                                const link = document.createElement('a')
                                link.href = `saved-resumes/${resumeId}`
                                link.click()
                                dispatch(saveResume(null))
                            }
                        }
                    } else {
                        dispatch(setUser(null))
                    }
                } catch (error: any) {
                    toast.error(error.message)
                } finally {
                    dispatch(setLoading(false))
                }
            })
        }, [user]
    )



    if (loading) {
        return (
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', backgroundColor: '#ada9d2' }}>
                <Grid
                    height="80"
                    width="80"
                    color="#2617c8"
                    ariaLabel="grid-loading"
                    radius="12.5"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        )
    }


    return (
        <BrowserRouter>
            <ToastContainer />
            <div className='container'>
                <Header />
                {
                    user ?
                        <PrivateRoutes />
                        :
                        <PublicRoutes />
                }
            </div>

        </BrowserRouter>
    )
}