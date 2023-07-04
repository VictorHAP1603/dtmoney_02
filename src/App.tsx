import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Transactions } from "./pages/Transactions"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Transactions />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
