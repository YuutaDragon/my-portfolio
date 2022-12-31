import { ThemeProvider } from "styled-components"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { LightContainer } from "./light"
import { GlobalStyle } from "./styles/global"
import { DefaultTheme } from "./styles/themes/default"

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Header />
      <Home />
      <LightContainer />
      <Skills />
      <Projects />
      <Footer />
      <GlobalStyle/>
    </ThemeProvider>
  )
}