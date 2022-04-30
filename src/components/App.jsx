
import { Routes } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { authOperations, authSelectors } from "redux/auth";
import AppBar from "./AppBar/AppBar";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { Container } from "./App.styled";

const HomeView = lazy(() => import('views/HomeView/HomeView'));
const LoginView = lazy(() => import('views/LoginView/LoginView'));
const RegisterView = lazy(() => import('views/RegisterView/RegisterView'));
const ContactsView = lazy(() => import('views/ContactsView/ContactsView'));

export default function App() {
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

          <Routes>
            <Suspense fallback={<h1>Loading....</h1>}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginView />
              </PublicRoute>
              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Routes>
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