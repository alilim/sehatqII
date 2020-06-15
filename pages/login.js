import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import EmptyLayouts from '../_includes/layouts/empty'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

import { setCurrentUser } from '../redux/user/user.actions'

import IconComponent from '../components/icon/icon.component'
import InputComponent from '../components/input/input.component'
import ButtonComponent from '../components/button/button.component'
import CheckboxComponent from '../components/checkbox/checkbox.component'
import TextComponent from '../components/text/text.component'
import FormComponent from '../components/form/form.component'
import ErrorComponent from '../components/error/error.component'

import { LoginContainer, LogoContainer, LoginPanelContainer, LoginTitleContainer, LoginTitle, LoginSubtitle, LoginFormContainer, LoginAsideContainer, LoginSocialSignContainer } from '../assets/styles/login.style'

const Login = ({ currentUser, setCurrentUser }) => {
  const router = useRouter()
  const [ isFirstLoad, setFirstLoad ] = useState(true)

  const evInit = () => {
    if(isFirstLoad) {
      if(currentUser?.name) router.push('/')
    }
  }

  useEffect(() => {
    evInit()
    router.prefetch('/')
  }, [])

  const { register, errors, handleSubmit } = useForm({ mode: 'onChange' })

  const responseFacebook = (response) => {
    if(response?.accessToken) handleLogin(response?.name)
  }

  const responseGoogle = (response) => {
    if(response?.tokenObj?.access_token   ) handleLogin(response?.profileObj?.name)
  }

  const onSubmit = data => {
    handleLogin(data.username)
  }

  const handleLogin = (name) => {
    setCurrentUser({
      name: name
    })
    router.push('/')
  }

  return (
    <EmptyLayouts>
      <LoginContainer>
        <LogoContainer>
          <IconComponent width='60px' name='sehat' />
        </LogoContainer>
        <LoginPanelContainer>
          <LoginTitleContainer>
            <LoginTitle>Hello</LoginTitle>
            <LoginSubtitle>Sign in your account</LoginSubtitle>
          </LoginTitleContainer>
          <LoginFormContainer>
            <FormComponent mode='login' onSubmit={handleSubmit(onSubmit)}>
              <div aria-label='body' >
                <article aria-label='group'>
                  <div aria-label='label'>Username</div>
                  <div aria-label='input'>
                  <InputComponent type='text' name='username' placeholder='Enter Username'  innerRef={register({ required: true })} isError={errors.username} />  
                  { errors.username && <ErrorComponent align='right'>Username is required</ErrorComponent> }
                  </div>
                </article>
                <article aria-label='group'>
                  <div aria-label='label'>Password</div>
                  <div aria-label='input'>
                    <InputComponent type='password' name='password' placeholder='Enter Password'  innerRef={register({ required: true })} isError={errors.password} />
                    { errors.password && <ErrorComponent align='right'>Password is required</ErrorComponent> }
                  </div>
                </article>
              </div>
              <div aria-label='action'>
                <CheckboxComponent name='rememberme'>Remember me</CheckboxComponent>
                <ButtonComponent mode='default' type='submit'>SIGN IN</ButtonComponent>
              </div>
            </FormComponent>
          </LoginFormContainer>
        </LoginPanelContainer>
        <LoginAsideContainer>
          <TextComponent align='center' color='#2c2c2c'> Or </TextComponent>
          <LoginSocialSignContainer>
            <FacebookLogin
                appId= {process.env.facebookKey.appID}
                fields='name,email,picture'
                scope='public_profile,user_friends'
                callback={responseFacebook} />
            <GoogleLogin
              clientId= {process.env.GoogleKey.clientID}
              buttonText='LOGIN WITH GOOGLE'
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </LoginSocialSignContainer>
        </LoginAsideContainer>
      </LoginContainer>
    </EmptyLayouts>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
