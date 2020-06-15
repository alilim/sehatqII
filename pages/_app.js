import '../styles/global.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-sharingbuttons/dist/main.css'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Auth from '../_includes/auth'
import GAListener from '../_includes/templates/ga/index'

import {store, persistor} from '../redux/store'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Auth asComponent={Component}>
          <GAListener>
            <Component {...pageProps} />
          </GAListener>
        </Auth>
      </PersistGate>
    </Provider> 
  )
}
