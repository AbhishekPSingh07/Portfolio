import styled, { ThemeProvider } from 'styled-components';
import Head from './Head';
import theme from '../styles/theme'
import { Nav } from './Nav';
import Social from './Social';
import Email from './Email';
import Footer from './Footer';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

interface LayoutProps {
    isHome: boolean; // Add isHome prop
    children: React.ReactNode; // Add children prop
}

export const Layout: React.FC<LayoutProps> = ({ isHome, children }) => {

    return (
        <>
            <Head/>
            <div id="root">
                <ThemeProvider theme={theme}>
                    <a className="skip-to-content" href="#content">
                        Skip to Content
                    </a>
                    <StyledContent>
                        <Nav/>
                        <Social isHome={isHome} />
                        <Email isHome={isHome} />

                        <div id="content">
                            {children}
                            <Footer />
                        </div>
                    </StyledContent>
                </ThemeProvider>
            </div>
        </>
    )
}