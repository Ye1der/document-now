import { Route, Switch } from 'wouter'
import { HomePage } from './pages/home.page'
import { LandingPage } from './pages/landing.page'
import { ProtectedRoute } from './features/login/protectedRoute'
import { Toaster } from 'sonner'

function App() {
  // const [startTheme, setStartTheme] = useState(false)

  // useEffect(() => {
  //   if (!theme) setTheme(Theme.dark)
  //   document.documentElement.classList.add(theme)
  //   setStartTheme(true)
  // }, [])

  return (
    <>
      <Toaster
        richColors
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1D1F21',
            borderRadius: '15px',
            borderWidth: '0px',
          },
        }}
      />
      <Switch>
        <Route path="/" component={LandingPage} />
        {/* <Route path="/documents/:reponame" component={DocumentsPage} /> */}
        <ProtectedRoute>
          <Route path="/home" component={HomePage} nest />
        </ProtectedRoute>
      </Switch>
    </>
  )
}

export default App
