import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@fontsource/poppins'
import './index.css'
import { GlobalContext } from './context/globalContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalContext>
    <App />
  </GlobalContext>
)
