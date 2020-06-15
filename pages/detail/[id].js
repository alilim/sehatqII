import { useState } from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import Head from 'next/head'

import SingleLayouts from '../../_includes/layouts/single'

import { addCart } from '../../redux/cart/cart.actions'
import { setLoveDetailItem, setLoveItem } from '../../redux/item/item.actions'

import Facebook from 'react-sharingbuttons/dist/buttons/Facebook'
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter'
import Email from 'react-sharingbuttons/dist/buttons/Email'

import ImageComponent from '../../components/image/image.component'
import ButtonComponent from '../../components/button/button.component'
import IconComponent from '../../components/icon/icon.component'
import TextComponent from '../../components/text/text.component'

import { DetailContainer, DetailWrapper, DetailImageContainer, ImageWrapper, DetailItemContainer, DetailTitleWrapper, DetailTitle, DetailDescription, DetailActionContainer, DetailPrice, ShareContainer }  from '../../assets/styles/detail.style'

const Detail = ({detailItem, addCart, setLoveItem, setLoveDetailItem}) => {
  const router = useRouter()

  const shareUrl = 'https://www.sehatq.com'
  const shareText = 'Visit us here!'
  const shareSubject = 'Hi'
  const [ isOpenShare, setOpenShare ] = useState(false)

  const evBuy = e => {
    let detail = e.target.getAttribute('data-detail') || {}
    detail = JSON.parse(detail)
    addCart(detail)
    router.push('/history')
  }

  const evLove = e => {
    let detail = e.target.getAttribute('data-detail') || {}
    detail = JSON.parse(detail)
    const newValue = detail.loved ? 0 : 1
    detail.loved = newValue
    setLoveItem({ id: detail.id, value: newValue })
    setLoveDetailItem({detail})
  }

  const evShare = e => {
    setOpenShare(!isOpenShare)
  }

  return (
    <SingleLayouts title='Detail' subtitle={detailItem?.detail?.title || ''} header='product'>
      <Head>
        <title key='title'>{detailItem?.detail?.title}</title>
        <meta name='description' key='description' content={detailItem?.detail?.description} />
        <meta property='og:title' key='og:title' content={detailItem?.detail?.title} />
        <meta property='og:description' key='og:description' content={detailItem?.detail?.description} />
        <meta property='og:url' key='og:url' content={router.asPath} />
        <meta property='og:image' key='og:image' content={detailItem?.detail?.imageUrl} />
        <meta property='og:image:url' key='og:image:url' content={detailItem?.detail?.imageUrl} />
        <meta property='og:twitter:title' key='og:twitter:title' content={detailItem?.detail?.title} />
        <meta property='og:twitter:desc' key='og:twitter:desc' content={detailItem?.detail?.description}  />
      </Head>
      <DetailContainer>
        {
          detailItem?.detail ? (
            <DetailWrapper>
              <DetailImageContainer>
                <ImageWrapper>
                  <ImageComponent mode='product' src={detailItem.detail.imageUrl} width='100%' height='auto' />
                  <IconComponent name='share' width='20px' onClick={evShare}/>
                  <ShareContainer isOpen={isOpenShare}>
                    <Facebook url={shareUrl} />
                    <Twitter url={shareUrl} shareText={shareText} />
                    <Email url={shareUrl} text={shareText} subject={shareSubject}/>
                  </ShareContainer>
                </ImageWrapper>
              </DetailImageContainer>
              <DetailItemContainer>
                <DetailTitleWrapper>
                  <DetailTitle>{detailItem.detail.title}</DetailTitle>
                  <IconComponent name={detailItem.detail.loved ? 'love' : 'love-black'}  width='24px'  data-detail={JSON.stringify(detailItem.detail)} onClick={evLove}/>
                </DetailTitleWrapper>
                <DetailDescription>
                  {detailItem.detail.description}
                </DetailDescription>
              </DetailItemContainer>
              <DetailActionContainer>
                <DetailPrice>{detailItem.detail.price}</DetailPrice>
                <ButtonComponent mode='default' data-detail={JSON.stringify(detailItem.detail)} onClick={evBuy} >Buy</ButtonComponent>
              </DetailActionContainer>
            </DetailWrapper>
          )  : <TextComponent color='#fff'>No Item</TextComponent>
        }
      </DetailContainer>
    </SingleLayouts>
  )
}


const mapStateToProps = state => ({
  detailItem: state.item.detailItem
})

const mapDispatchToProps = dispatch => ({
  addCart: cart => dispatch(addCart(cart)),
  setLoveDetailItem: item => dispatch(setLoveDetailItem(item)),
  setLoveItem: item => dispatch(setLoveItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)