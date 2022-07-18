import { useEffect } from 'react';
import '../styles/globals.css'
import { AuthProvider } from '../context/useAuth'

function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )

}

export default MyApp