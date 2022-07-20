import React from 'react'
import {Product,FooterBanner,HeroBanner} from 
'../components'
import { client } from '../lib/client'

const Home = ({productsdata,bannersdata}) => {
  return (
    <>
    
      <HeroBanner heroBanner={bannersdata.length&&bannersdata[0]} />
      {/* {console.log(bannersdata)} */}
      <div>
        <h2 className='products-heading'>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {
          productsdata?.map(
            (product)=><Product key={product._id} product={product} />
          )
        }
      </div>


      <FooterBanner footerBanner={bannersdata&&bannersdata[0]} />
    </>
  )
}

export const getServerSideProps = async () => {
  const query='*[_type=="product"]';
  const productsdata=await client.fetch(query);
  const bannerquery='*[_type=="banner"]';
  const bannersdata=await client.fetch(bannerquery);
  return {
    props: {productsdata,bannersdata}
  }
} 
export default Home