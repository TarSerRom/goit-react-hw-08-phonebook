import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Ul, SiteNavLink, Li } from './Navigation.styled';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <Ul>
        <Li>
          <SiteNavLink to="/" activeClassName="active" exact>
            Home
          </SiteNavLink>
        </Li>
        {isLoggedIn && (
          <Li>
            <SiteNavLink to="contacts" activeClassName="active" exact>
              Contacts
            </SiteNavLink>
          </Li>
        )}
      </Ul>
    </nav>
  );
}