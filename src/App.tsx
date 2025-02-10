import './App.css';
import styled from 'styled-components';
import { Layout } from './components/Layout';
import { BrowserRouter as Router ,useLocation } from 'react-router-dom'; // Import Router and useLocation
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { JobsSection } from './components/sections/JobsSection';

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
        <HeroSection />
        <AboutSection />
        <JobsSection />
      </StyledMainContainer>
    </Layout>
  );
};

export default App;