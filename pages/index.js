import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import SingleLayouts from '../_includes/layouts/single'
import NavPartials from './partials/nav'
import LatestPartials from './partials/latest'

import { setCurrentItem, setCurrentCategory} from '../redux/item/item.actions'

import { HomeContainer } from '../assets/styles/home.style'
  
const Index = ({currentUser, currentItem, setCurrentItem, setCurrentCategory, data}) => {
  const [ isFirstLoad, setFirstLoad ] = useState(true)

  const evInit = () => {
    if(isFirstLoad) {
      if(data[0]?.data?.category) {
        const categories = data[0].data.category
        setCurrentCategory({
          category: categories
        })
      }
      if(data[0]?.data?.productPromo) {
        const items = data[0].data.productPromo
        setCurrentItem({
          item: items
        })
      }
      setFirstLoad(false)
    }
  }

  useEffect(() => {
    evInit()
  })

  return (
    <SingleLayouts title={currentUser?.name ? `Hi ${currentUser.name}` : 'Discover'} subtitle='Welcome to SehatQ'>
      <HomeContainer>
        <NavPartials />
        <LatestPartials />
      </HomeContainer>
    </SingleLayouts>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://private-4639ce-ecommerce56.apiary-mock.com/home`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentItem: state.item.currentItem
})

const mapDispatchToProps = dispatch => ({
  setCurrentItem: item => dispatch(setCurrentItem(item)),
  setCurrentCategory: category => dispatch(setCurrentCategory(category))
})


const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, stateProps, dispatchProps)
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Index)