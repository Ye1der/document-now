import { Route, Switch, useLocation, useRoute } from 'wouter'
import { HomePage } from './pages/home/home.page'
import { LoginPage } from './pages/login/login.page'
import { Toaster } from './components/ui/sonner'
import { useEffect, useState } from 'react'
import { addLocal, getLocal, TOKEN_KEY } from './utils'
import { LandingPage } from './pages/landing/landing.page'

function App() {
  const [match] = useRoute('/home*')
  const [, setLocation] = useLocation()

  useEffect(() => {
    if (match) {
      const token = getLocal(TOKEN_KEY)

      if (!token) {
        setLocation('/login')
      }
    }
  }, [match])

  const [startTheme, setStartTheme] = useState(false)

  useEffect(() => {
    const theme = getLocal('theme')
    if (!theme) addLocal('theme', 'dark')
    document.documentElement.classList.add(theme)
    setStartTheme(true)
  }, [])

  if (startTheme)
    return (
      <main className="h-screen">
        <Switch>
          <Route path="/" component={LandingPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
        <Toaster richColors />
      </main>
    )
}

export default App
