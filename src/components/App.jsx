
import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { authOperations, authSelectors } from "redux/auth";
import AppBar from "./AppBar/AppBar";

import { Container } from "./App.styled";

const HomeView = lazy(() => import('views/HomeView/HomeView'));
const LoginView = lazy(() => import('views/LoginView/LoginView'));
const RegisterView = lazy(() => import('views/RegisterView/RegisterView'));
const ContactsView = lazy(() => import('views/ContactsView/ContactsView'));

export default function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <AppBar />
          <Suspense fallback={<h1>Loading....</h1>}>
          <Routes>
              <Route path="/" element={<HomeView />} />
              <Route
                path="/register"
                restricted
                element={
                  !isLoggedIn ? <RegisterView /> : <Navigate to="/contacts" />
                }
              />
              <Route
                path="/login"
                redirectTo="/contacts"
                restricted
                element={
                  !isLoggedIn ? <LoginView /> : <Navigate to="/contacts" />
                }
              />
              <Route
                path="/contacts"
                redirectTo="/login"
                element={
                  isLoggedIn ? <ContactsView /> : <Navigate to="/login" />
                }
              />
            </Routes>
          </Suspense>
        </>
      )}
      <ToastContainer autoClose={3000} />
    </Container>
  );
}












/*export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
        backgroundColor: 'yellow'
      }}
    >
      React homework template
    </div>
  );
};
*/