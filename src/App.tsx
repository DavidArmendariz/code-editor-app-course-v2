import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from 'auth/AuthProvider';
import Loading from 'components/common/loading/Loading';
import Routes from 'routes/Routes';
import CustomThemeProvider from 'theme/CustomThemeProvider';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <AuthProvider>
          <CustomThemeProvider>
            <Routes />
          </CustomThemeProvider>
        </AuthProvider>
      </Router>
    </Suspense>
  );
}

export default App;
