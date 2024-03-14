import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
        return <Navigate to={"/"} />
    }
    return children;
}
export default ProtectedRoute;


// HOW TO USE

{/* <Route
    path="/chat"
    element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Main />
        </ProtectedRoute>
    }
/> */}




// IN DEPTH DOCX EXAMPLE



// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Main from "./Pages/Main/Main";
// import Footer from "./Components/footer/footer";
// import NavBar from "./Components/navbar/NavBar";
// import LoginForm from "./Pages/Login/LoginForm";
// import Signup from "./Pages/Signup/Signup"
// import { SnackbarProvider } from "notistack";
// import ProtectedRoute from "./ProtectedRoute";
// import { useSelector } from "react-redux";
// import ChangePassword from "./Pages/ChangePassword/ChangePassword";
// import Profile from "./Pages/Profile/Profile";
// import ProfileUpdate from "./Pages/ProfileUpdate/ProfileUpdate";
// import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
// import OTPVerification from "./Pages/OTPVerification/OTPVerification";
// import NewPassword from "./Pages/NewPassword/NewPassword";

// function App() {
//   const isAuthenticated = useSelector(state => state.login.isAuthenticated);
//   // const isForgotPasswordFlow = useSelector(state => state.login.isForgotPasswordFlow);
//   const isForgotPasswordFlow = true;

//   return (
//     <>
//       <SnackbarProvider>
//         <BrowserRouter>
//           <NavBar />
//           <Routes>
//             <Route
//               path="/chat"
//               element={
//                 <ProtectedRoute isAuthenticated={isAuthenticated}>
//                   <Main />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/profile"
//               element={
//                 <ProtectedRoute isAuthenticated={isAuthenticated}>
//                   <Profile />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/profile-edit"
//               element={
//                 <ProtectedRoute isAuthenticated={isAuthenticated}>
//                   <ProfileUpdate />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/change-password"
//               element={
//                 <ProtectedRoute isAuthenticated={isAuthenticated}>
//                   <ChangePassword />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/"
//               element={isAuthenticated ? <Navigate to="/chat" /> : <LoginForm />}
//             />
//             <Route
//               path="/forgot-password"
//               element={isAuthenticated ? <Navigate to="/chat" /> : <ForgotPassword />}
//             />
//             {isForgotPasswordFlow && (
//               <>
//                 <Route path="/otp-verification" element={<OTPVerification />} />
//                 <Route path="/new-password" element={<NewPassword />} />
//               </>
//             )}
//             <Route
//               path="/signup"
//               element={isAuthenticated ? <Navigate to="/chat" /> : <Signup />}
//             />
//           </Routes>
//           <Footer />
//         </BrowserRouter>
//       </SnackbarProvider>
//     </>
//   );
// }

// export default App;