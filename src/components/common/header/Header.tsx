import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useHistory } from 'react-router-dom';
import paths from 'routes/paths';
import CodeEditorButton from './CodeEditorButton';
import DarkModeSwitch from './DarkModeSwitch';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import OpenWorkspaceButton from './OpenWorkspaceButton';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.commonColors.white,
}));

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" sx={{ flex: 1 }}>
          <StyledLink to={paths.home}>Code Editor App</StyledLink>
        </Typography>
        <DarkModeSwitch />
        {isAuthenticated ? <AuthenticatedButtons /> : <UnauthenticatedButtons />}
      </Toolbar>
    </AppBar>
  );
};

const UnauthenticatedButtons = () => {
  return (
    <div>
      <SignInButton />
    </div>
  );
};

const AuthenticatedButtonsContainer = styled('div')({ display: 'flex' });

const AuthenticatedButtons = () => {
  const history = useHistory();

  return (
    <AuthenticatedButtonsContainer>
      {history.location.pathname === paths.home ? <CodeEditorButton /> : <OpenWorkspaceButton />}
      <SignOutButton />
    </AuthenticatedButtonsContainer>
  );
};

export default Header;
