import { Navigate, Route, Routes } from 'react-router-dom'
import BoldAmbition from '../components/resume/templates/BoldAmbition'
import BoldImpact from '../components/resume/templates/BoldImpact'
import ClassicElegance from '../components/resume/templates/ClassicElegance'
import CleanAndSimple from '../components/resume/templates/CleanAndSimple'
import CreativeSpark from '../components/resume/templates/CreativeSpark'
import DistinctiveStyle from '../components/resume/templates/DistinctiveStyle'
import DynamicVision from '../components/resume/templates/DynamicVision'
import InnovativeFlair from '../components/resume/templates/InnovativeFlair'
import ModernMinimalism from '../components/resume/templates/ModernMinimalism'
import ProfessionalEdge from '../components/resume/templates/ProfessionalEdge'
import RefinedGrace from '../components/resume/templates/RefinedGrace'
import SharpFocus from '../components/resume/templates/SharpFocus'
import SleekLines from '../components/resume/templates/SleekLines'
import SophisticatedSimplicity from '../components/resume/templates/SophisticatedSimplicity'
import TimelessTradition from '../components/resume/templates/TimelessTradition'
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
            <Route path='/create/classic-elegance' element={<ClassicElegance />} />
            <Route path='/create/modern-minimalism' element={<ModernMinimalism />} />
            <Route path='/create/bold-impact' element={<BoldImpact />} />
            <Route path='/create/professional-edge' element={<ProfessionalEdge />} />
            <Route path='/create/creative-spark' element={<CreativeSpark />} />
            <Route path='/create/sophisticated-simplicity' element={<SophisticatedSimplicity />} />
            <Route path='/create/sleek-lines' element={<SleekLines />} />
            <Route path='/create/distinctive-style' element={<DistinctiveStyle />} />
            <Route path='/create/clean-and-simple' element={<CleanAndSimple />} />
            <Route path='/create/refined-grace' element={<RefinedGrace />} />
            <Route path='/create/sharp-focus' element={<SharpFocus />} />
            <Route path='/create/dynamic-vision' element={<DynamicVision />} />
            <Route path='/create/bold-ambition' element={<BoldAmbition />} />
            <Route path='/create/timeless-tradition' element={<TimelessTradition />} />
            <Route path='/create/innovative-flair' element={<InnovativeFlair />} />
            <Route path='/create/blank' element={<Blank />} />
        </Routes>
    )
}

export default PublicRoutes