import { Spin } from 'antd';
import React , {Suspense, lazy} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import ErrorPage from './pages/404/ErrorPage';
import ReusableMultiStepFrom from './components/common-component/multi-step-form/ReusableMultiStepFrom';
// import AvatarChanger from './pages/step-pages/AvatarChanger';


const Home=lazy(()=>import('./pages/home/Home'))
const SearchPage=lazy(()=>import('./pages/seacrh-page/SearchPage'))
const Profile=lazy(()=>import('./pages/profile/Profile'))

const SubRoutes=()=>{
    const authObject = useSelector((state) => state.auth.userDetails);
    return(
    <>
    <Suspense fallback={<Spin size='large' className='spinner_whole_web' />}>

            <Routes>
                {authObject ? (
                    <>
                    <Route path='/search' element={<SearchPage/>} />
                    <Route path='/profile/:id' element={<Profile/>} />
                 
                </>
                ) : (
                    <></>
                )}
                
                {/* all routes */}
                <Route path='/' element={<Home/>} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profileReg" element={<ReusableMultiStepFrom />} />
                {/* <Route path="/upload-img" element={<AvatarChanger />} /> */}
                <Route path="/404" element={<ErrorPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />

            </Routes>
            </Suspense>
        </>
    )
}
export default SubRoutes