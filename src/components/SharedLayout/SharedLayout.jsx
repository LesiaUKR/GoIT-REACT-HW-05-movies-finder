import { Outlet } from 'react-router-dom';
import { StyledLink, Container, Header } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        {/* <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </Logo> */}
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
