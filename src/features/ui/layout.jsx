import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../header/header.component";
import Footer from "../footer/footer.component";

export default function PageLayout({ switchTheme, themeMode }) {
  const { pathname, hash, key, state } = useLocation();

  //manage hash link scroll effect
  useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          // Set smooth behavior if on home page
          const scrollOptions = {
            block: "end",
            ...(state?.from === "/" && { behavior: "smooth" }),
          };

          element.scrollIntoView(scrollOptions);
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  //
  return (
    <main>
      <Header
        switchTheme={switchTheme}
        themeMode={themeMode}
        //   scrollPastHeader={scrollPastHeader}
      />
      <Outlet />
      <Footer />
    </main>
  );
}
