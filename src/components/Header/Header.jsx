import { useState, useEffect } from "react";
import { IoMoonOutline, IoMoon } from "react-icons/io5";

import { Container } from "../Container/Container";
import { HeaderEl, Wrapper, Title, ModeSwitcher } from "./Header.styled";

export const Header = () => {
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme)
  }, [theme]);

  return (
    <HeaderEl type={theme}>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher
            onClick={toggleTheme}
          >
            {theme === "light" ? (
            <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}
            {" "}
            <span style={{ marginLeft: "0.75rem", color: "var(--colors-text)" }}>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
