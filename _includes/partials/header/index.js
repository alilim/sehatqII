import Link from 'next/link'
import { useRouter } from 'next/router'

import { debounce } from '../../../assets/javascripts/function'

import IconComponent from '../../../components/icon/icon.component'
import InputComponent from '../../../components/input/input.component'

import { HeaderContainer, LogoContainer, SearchContainer, BackContainer } from './header.style'

const HeaderPartials = ({mode, setValueSearch}) => {
  const router = useRouter()

  const delayedCallback = debounce((e) => {
    let val = e.target.value
    setValueSearch(val)
  }, 300)

  const evSearch = (e) => {
    e.persist()
    delayedCallback(e)
  }

  const evBack = props => {
    router.back()
  }

  let contentEl = (
    <>
      <LogoContainer>
        <IconComponent width='30px' height='26px' name='sehat-black' />
      </LogoContainer>
      <SearchContainer>
        <Link href='/search' passHref>
          <div>
            <IconComponent width='22px' name='search' />
          </div>
        </Link>
      </SearchContainer>
    </>
  )
    
  if(mode === 'search') {
    contentEl = (
      <>
        <BackContainer>
          <IconComponent width='26px' name='back' onClick={evBack}/>
        </BackContainer>
        <SearchContainer isShown={true}>
          <IconComponent name='search-active' width='16px'></IconComponent>
          <InputComponent type='text' name='search-input' mode='search' placeholder='Input text for Searching' onChange={evSearch} /> 
        </SearchContainer>
      </>
    )
  }else if (mode === 'product') {
    contentEl = (
      <>
        <BackContainer>
          <IconComponent width='26px' name='back' onClick={evBack}/>
        </BackContainer>
        <SearchContainer>
          <Link href='/search' passHref>
            <div>
              <IconComponent width='22px' name='search' />
            </div>
          </Link>
        </SearchContainer>
      </>
    )
  }
  return (
    <HeaderContainer mode={mode}>
      {contentEl}
    </HeaderContainer>
  )
}

export default HeaderPartials