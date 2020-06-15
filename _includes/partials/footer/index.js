import Link from 'next/link'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { store } from '../../../redux/store'

import IconComponent from '../../../components/icon/icon.component'
import TextComponent from '../../../components/text/text.component'

import { FooterContainer, FooterListContainer, FooterItemWrapper, NotificationIcon } from './footer.style'

const FooterPartials = ({cartItems, setLogoutUser}) => {
  const router = useRouter()

  const RESET_ACTION = {
    type: 'USER_LOGGED_OUT'
  }

  const evLogout = () => {
    store.dispatch(RESET_ACTION)
  }

  return (
    <FooterContainer>
      <FooterListContainer>
        <FooterItemWrapper>
          <Link href='/' passHref>
            <div>
              <IconComponent width='26px' name={router.pathname === '/' ? 'home-active' : 'home' } />
              <TextComponent color={router.pathname === '/' ? '#ffa883' : 'initial' }>Home</TextComponent>
            </div>
          </Link>
          
        </FooterItemWrapper>
        <FooterItemWrapper>
          <Link href='/' passHref>
            <div>
              <IconComponent width='26px' name='feed' />
              <TextComponent>Feed</TextComponent>
            </div>
          </Link>
        </FooterItemWrapper>
        <FooterItemWrapper>
          <Link href='/history' passHref>
            <div>
              <IconComponent width='26px' name={location.pathname === '/history' ? 'cart-active' : 'cart' }  />
              <TextComponent color={location.pathname === '/history' ? '#ffa883' : 'initial' }>Cart</TextComponent>
              {cartItems.length ? <NotificationIcon>{cartItems.length}</NotificationIcon> : null}
            </div>
          </Link>
        </FooterItemWrapper>
        <FooterItemWrapper>
          <Link href='/'>
            <div onClick={evLogout}>
              <IconComponent width='26px' name='profile'/>
              <TextComponent>Logout</TextComponent>
            </div>
          </Link>
        </FooterItemWrapper>
      </FooterListContainer>
    </FooterContainer>
  )
}

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
})


export default connect(mapStateToProps)(FooterPartials)