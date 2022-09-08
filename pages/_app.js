import '../styles/globals.scss'
import AppState from '../context/appState'

function MyApp({ Component, pageProps }) {
  return (
    <AppState>
      <Component {...pageProps} />
    </AppState>
  )
}

export default MyApp
