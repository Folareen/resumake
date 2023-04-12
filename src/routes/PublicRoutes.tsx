import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Signup from '../pages/auth/Signup'
import Dashboard from '../pages/dashboard/Dashboard'
import Blank from '../pages/public/Blank'
import Create from '../pages/public/Create'
import Landing from '../pages/public/Landing'
import NotFound from '../pages/public/NotFound'
import Templates from '../pages/public/Templates'

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Navigate replace to='/login' />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/create' element={<Create />} />
            <Route path='/templates' element={<Templates />} />
            <Route path='/blank' element={<Blank />} />
        </Routes>
    )
}

export default PublicRoutes