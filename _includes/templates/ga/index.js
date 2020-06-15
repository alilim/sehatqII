import { useEffect } from 'react'
import { useRouter } from 'next/router'

import ReactGA from 'react-ga'

ReactGA.initialize(process.env.GAKEY.initializeKey)

const GAListener = ({children}) => {
  const router = useRouter()

  useEffect(() => {
    ReactGA.ga('send', 'pageview', router.pathname)
  }, [router])

  return children
}


export default GAListener