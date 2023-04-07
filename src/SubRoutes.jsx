import { Spin } from 'antd';
import React , {Suspense, lazy} from 'react';
import {Routes, Route} from 'react-router-dom';
import ProfileNew from './pages/profile/ProfileNew';


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
                <Route path='/profile-new' element={< ProfileNew/>} />

                


            </Routes>
            </Suspense>
        </>
    )
}
export default SubRoutes