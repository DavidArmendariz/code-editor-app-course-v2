import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from 'auth/AuthProvider';
import Loading from 'components/common/loading/Loading';
import Routes from 'routes/Routes';
import CustomThemeProvider from 'theme/CustomThemeProvider';
import StoreProvider from 'store/StoreProvider';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <StoreProvider>
        <Router>
          <AuthProvider>
            <CustomThemeProvider>
              <Routes />
            </CustomThemeProvider>
          </AuthProvider>
        </Router>
      </StoreProvider>
    </Suspense>
  );
}

export default App;
