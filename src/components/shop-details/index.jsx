import Breadcrumb from '@/common/breadcrumb'
import ShopDetailsArea from './shop-details-area'
import Header from '@/layout/headers/header'

const ShopDetails = () => {
    return (
        <>
            <Header style={true} />
            <main>
                <Breadcrumb title="Product Single" sm_title="Product Single" />
                <ShopDetailsArea />
            </main>
        </>
    )
}

export default ShopDetails
