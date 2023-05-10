import { store } from '../store';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react'
import { NextComponentType, NextPageContext } from 'next';

interface props {
  Component: NextComponentType<NextPageContext, any, any>,
  pageProps: any,
  session: any
}

export default function App({ Component, pageProps, session }: props) {

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  )
}
