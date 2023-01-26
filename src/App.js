import { ThemeProvider } from "styled-components";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/home";
import Resume from "./pages/resume";
import About from "./pages/about";
import Contacts from "./pages/contacts";
import Work from "./pages/work";
import themeData from "./constants/themes";
import useThemeMode from "./hooks/useTheme";
import { GlobalStyles } from "./global-styles";
import PageLayout from "./features/ui/layout";

function App() {
  const { themeMode, switchTheme } = useThemeMode();

  return (
    <ThemeProvider theme={themeData[themeMode]}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PageLayout switchTheme={switchTheme} themeMode={themeMode} />
            }
          >
            <Route index element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contacts />} />
            <Route path="resume" element={<Resume />} />
            <Route path="works/:id" element={<Work />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
