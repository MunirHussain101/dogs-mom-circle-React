import React, {Suspense, lazy} from "react";
import {Spin} from "antd";
import {Routes, Route, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp";

const Home = lazy(() => import("./pages/home/Home"));
const SearchPage = lazy(() => import("./pages/seacrh-page/SearchPage"));
const Profile = lazy(() => import("./pages/profile/Profile"));
const ErrorPage = lazy(() => import("./pages/404/ErrorPage"));
const ReusableMultiStepFrom = lazy(() => import("./components/common-component/dynamic/multi-step-form/ReusableMultiStepFrom"));
const ChatSidebar = lazy(() => import("./pages/chats/ChatSidebar/ChatSidebar"));

const SubRoutes = ({socket}) => {
  const authObject = useSelector((state) => state.auth.userDetails);
  return (
    <>
      <Suspense fallback={<Spin size="large" className="spinner_whole_web" />}>
        <Routes>
          {authObject ? (
            <>
              <Route path="/search" element={<SearchPage />} />
              <Route path="/profile/:id" element={<Profile socket={socket} />} />
              <Route path="/chats" element={<ChatSidebar socket={socket} />} />

            </>
          ) : (
            <></>
          )}

          {/* all routes */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile-register" element={<ReusableMultiStepFrom />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default SubRoutes;
