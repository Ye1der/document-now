import { Route, Switch } from 'wouter'
import { HomePage } from './pages/home/home.page'
import { LoginPage } from './pages/login/login.page'
import { Toaster } from './components/ui/sonner'
import { useEffect, useState } from 'react'
import { LandingPage } from './pages/landing/landing.page'
import { DocumentsPage } from './pages/documents/documents.page'
import { IndexLayout } from './layouts/index.layout'
import { useTheme } from './hooks'
import { Theme } from './types.d'
import { DocumentProvider } from './context/documentContext'

function App() {
  const { theme, setTheme } = useTheme()

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
          <DocumentProvider>
            <Route path="/home" component={HomePage} nest />
          </DocumentProvider>
          <Route path="/login" component={LoginPage} />
          <Toaster richColors />
        </IndexLayout>
      </Switch>
    )
}

export default App
