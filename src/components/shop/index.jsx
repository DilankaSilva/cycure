import Breadcrumb from '@/common/breadcrumb'
import ShopArea from './shop-area'
import Header from '@/layout/headers/header';

const Shop = () => {
  return (
    <>
      <Header style={true} />
      <main>
        <Breadcrumb title="Product List" sm_title="Our Shop" />
        <ShopArea />
      </main>
    </>
  )
}

export default Shop;
