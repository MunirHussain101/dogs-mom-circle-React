import { Spin } from 'antd';
import React , {Suspense, lazy} from 'react';
import {Routes, Route} from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import DogProfile_1 from './components/dog-profile/DogProfile_1';
import DogProfile_2 from './components/dog-profile/DogProfile_2';
import DogProfile_3 from './components/dog-profile/DogProfile_3';
import DogProfile_4 from './components/dog-profile/DogProfile_4';
import Login from './components/Login/Login';


const Home=lazy(()=>import('./pages/home/Home'))
const SearchPage=lazy(()=>import('./pages/seacrh-page/SearchPage'))
const Profile=lazy(()=>import('./pages/profile/Profile'))

const SubRoutes=()=>{
    return(
    <>
    <Suspense fallback={<Spin size='large' className='spinner_whole_web' />}>

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/search' element={<SearchPage/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dogprofile1" element={<DogProfile_1 />} />
                <Route path="/dogprofile2" element={<DogProfile_2 />} />
                <Route path="/dogprofile3" element={<DogProfile_3 />} />
                <Route path="/dogprofile4" element={<DogProfile_4 />} />
                
            </Routes>
            </Suspense>
        </>
    )
}
export default SubRoutes