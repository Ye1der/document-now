import { Redirect, Route, Switch, useLocation, useRoute } from 'wouter'
import { HomePage } from './pages/home/home.page'
import { LoginPage } from './pages/login/login.page'
import { Toaster } from './components/ui/sonner'
import { useEffect } from 'react'
import { getLocal, TOKEN_KEY } from './utils'

function App() {
  // const [match] = useRoute('/home*')
  // const [, setLocation] = useLocation()

  // useEffect(() => {
  //   if (match) {
  //     const token = getLocal(TOKEN_KEY)

  //     if (!token) {
  //       setLocation('/login')
  //     }
  //   }
  // }, [match])

  useEffect(() => {
    document.querySelector('html')?.classList.add('dark')
  }, [])

  return (
    <main className="h-screen">
      <Switch>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
      <Toaster richColors />
    </main>
  )
}

export default App
