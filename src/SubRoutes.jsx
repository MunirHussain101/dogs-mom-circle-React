import { Spin } from 'antd';
import React , {Suspense, lazy} from 'react';
import {Routes, Route} from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import { useSelector } from 'react-redux';
import ProfileRegistration from './components/dog-profile/ProfileRegistration';
import ErrorPage from './pages/404/ErrorPage';


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
                
                    <Route path='/' element={<Home/>} />

                <Route path="/register" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profileReg" element={<ProfileRegistration />} />
                <Route path="*" element={<ErrorPage />} />

            </Routes>
            </Suspense>
        </>
    )
}
export default SubRoutes