import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import AuthNav from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";
import Navigation from "components/Navigation/Navigation";
import { Header } from "./AppBar.styled";

export default function AppBar () {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <Header>
            <Navigation/>
            {isLoggedIn? <UserMenu/> : <AuthNav/>}
        </Header>
    );
}
