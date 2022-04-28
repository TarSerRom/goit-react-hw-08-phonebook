import { Ul, SiteNavLink, Li } from './AuthNav.styled';
export default function AuthNav() {
  return (
    <Ul>
      <Li>
        <SiteNavLink to="/register" exact activeClassName="active">
          Sign up
        </SiteNavLink>
      </Li>
      <Li>
        <SiteNavLink to="/login" exact activeClassName="active">
          Log In
        </SiteNavLink>
      </Li>
    </Ul>
  );
}