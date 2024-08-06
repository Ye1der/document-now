import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@fontsource/poppins'
import './index.css'
import { GlobalContext } from './context/globalContext.tsx'
import { SearchProvider } from './context/searchContext.tsx'
import './typesExtensions.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalContext>
    <SearchProvider>
      <App />
    </SearchProvider>
  </GlobalContext>
)
