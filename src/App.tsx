import './App.css';
import styled from 'styled-components';
import { Layout } from './components/Layout';
import { BrowserRouter as Router ,useLocation } from 'react-router-dom'; // Import Router and useLocation

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

function App() {
  return (
    <Router> {/* Wrap your app in Router */}
      <LayoutWrapper />
    </Router>
  );
}

const LayoutWrapper = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <Layout isHome={isHome}>
      <StyledMainContainer className="fillHeight">
        <div>Some text</div>
      </StyledMainContainer>
    </Layout>
  );
};

export default App;