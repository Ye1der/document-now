import { Route, Switch, useLocation, useRoute } from 'wouter'
import { HomePage } from './pages/home/home.page'
import { LoginPage } from './pages/login/login.page'
import { Toaster } from './components/ui/sonner'
import { useEffect, useState } from 'react'
import { LandingPage } from './pages/landing/landing.page'
import { DocumentsPage } from './pages/documents/documents.page'
import { IndexLayout } from './layouts/index.layout'
import { useTheme, useToken } from './hooks'
import { Theme } from './types.d'

function App() {
  const { accessToken: token } = useToken()
  const { theme, setTheme } = useTheme()
  const [match] = useRoute('/home/*')
  const [, setLocation] = useLocation()

  useEffect(() => {
    if (match) {
      if (!token) {
        setLocation('/login')
      }
    }
  }, [match])

  const [startTheme, setStartTheme] = useState(false)

  useEffect(() => {
    if (!theme) setTheme(Theme.dark)
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
