import { Route, Switch, useLocation, useRoute } from 'wouter'
import { HomePage } from './pages/home/home.page'
import { LoginPage } from './pages/login/login.page'
import { Toaster } from './components/ui/sonner'
import { useEffect, useState } from 'react'
import { addLocal, getLocal, TOKEN_KEY } from './utils'
import { LandingPage } from './pages/landing/landing.page'
import { DocumentsPage } from './pages/documents/documents.page'
import { IndexLayout } from './layouts/index.layout'

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
      <Switch>
        <Route path="/" component={LandingPage} />
        <IndexLayout>
          <Route path="/documents/:reponame" component={DocumentsPage} />
          <Route path="/home" component={HomePage} nest />
          <Route path="/login" component={LoginPage} />
          <Toaster richColors />
        </IndexLayout>
      </Switch>
    )
}

export default App
