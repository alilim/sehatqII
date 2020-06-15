import styled from 'styled-components'

/* functions */
const getIconContainerStyled = ({name, width, height, onClick, mode}) => {
  let modifiedStyled = ''
  switch(name){
    case 'sehat': 
      modifiedStyled += `&:before { content: url('/icons/sehat.svg'); }`
      break;
    case 'sehat-black': 
      modifiedStyled += `&:before { content: url('/icons/sehat-black.svg'); }`
      break;  
    case 'search': 
      modifiedStyled += `&:before { content: url('/icons/search.svg'); }`
      break;  
    case 'search-active': 
      modifiedStyled += `&:before { content: url('/icons/search-active.svg'); }`
      break; 
    case 'home': 
      modifiedStyled += `&:before { content: url('/icons/home.svg'); }`
      break;  
    case 'home-active': 
      modifiedStyled += `&:before { content: url('/icons/home-active.svg'); }`
      break; 
    case 'feed': 
      modifiedStyled += `&:before { content: url('/icons/feed.svg'); }`
      break;  
    case 'cart': 
      modifiedStyled += `&:before { content: url('/icons/cart.svg'); }`
      break;  
    case 'cart-active': 
      modifiedStyled += `&:before { content: url('/icons/cart-active.svg'); }`
      break; 
    case 'profile': 
      modifiedStyled += `&:before { content: url('/icons/profile.svg'); }`
      break;  
    case 'profile-active': 
      modifiedStyled += `&:before { content: url('/icons/profile-active.svg'); }`
      break;  
    case 'love': 
      modifiedStyled += `&:before { content: url('/icons/love.svg'); }`
      break;  
    case 'love-black': 
      modifiedStyled += `&:before { content: url('/icons/love-black.svg'); }`
      break;   
    case 'back': 
      modifiedStyled += `&:before { content: url('/icons/back.svg'); }`
      break;  
    case 'share': 
      modifiedStyled += `&:before { content: url('/icons/share.svg'); }`
      break;  
    default: 
      break;
  }
  if(width && height) modifiedStyled += `
    &:before { 
      width: ${width}; 
      height: ${height};
    }
  `
  else if(width) modifiedStyled += `
    &:before { 
      width: ${width}; 
      height: ${width};
    }
  `
  if(onClick) modifiedStyled += ` cursor: pointer; `
  return modifiedStyled
}


/* components */
export const IconContainer = styled.i`
  ${getIconContainerStyled}
  &:before {
    display: grid;
  }
`

