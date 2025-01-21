import { Route, Switch } from 'wouter'
import { HomePage } from './pages/home.page'
import { Toaster } from './components/ui/sonner'
import { useEffect, useState } from 'react'
import { LandingPage } from './pages/landing.page'
import { DocumentsPage } from './pages/documents/documents.page'
import { useTheme } from './hooks'
import { Theme } from './types.d'
import { ProtectedRoute } from './features/login/protectedRoute'

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
        <Route path="/documents/:reponame" component={DocumentsPage} />
        <ProtectedRoute>
          <Route path="/home" component={HomePage} nest />
        </ProtectedRoute>
        <Toaster richColors />
      </Switch>
    )
}

export default App
