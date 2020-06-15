import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'

const Auth = ({currentUser, asComponent, children}) => {
  const router = useRouter()

  useEffect(() => {
    const name = asComponent?.displayName
    if(name) {
      if(name !== 'Connect(Login)' && !currentUser?.name) {
        router.push('/login')
      }
    }
 
  }, [router])

  return children
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, stateProps, dispatchProps)
}


export default connect(mapStateToProps, null, mergeProps)(Auth)