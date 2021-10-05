import { styled } from '@mui/material/styles';
import Layout from 'components/common/layout/Layout';

const HomeContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.background,
}));

const WelcomeMessage = styled('div')(({ theme }) => ({
  padding: '15px',
  fontSize: '30px',
  color: theme.font,
}));

const Home = () => {
  return (
    <Layout>
      <HomeContainer>
        <WelcomeMessage>Welcome to the Code Editor App</WelcomeMessage>
      </HomeContainer>
    </Layout>
  );
};

export default Home;
