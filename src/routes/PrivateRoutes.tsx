import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import Blank from '../pages/public/Blank'
import Create from '../pages/public/Create'
import Landing from '../pages/public/Landing'
import NotFound from '../pages/public/NotFound'
import Templates from '../pages/public/Templates'

const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Navigate replace to='/dashboard' />} />
            <Route path='/dashboard' element={<Navigate replace to='/dashboard' />} />
            <Route path='/create' element={<Create />} />
            <Route path='/templates' element={<Templates />} />
            <Route path='/blank' element={<Blank />} />
        </Routes>
    )
}

export default PrivateRoutes