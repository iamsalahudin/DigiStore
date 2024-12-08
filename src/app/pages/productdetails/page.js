import React from 'react';
import Productcard from '../(components)/productcard/productcard';
import Products from "../productdetails/productsData.json"
import Description from '../(components)/description/description';
const Page = () => {
  return (
    <>
      <Description/>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4'>
        {Products.map((product) => (
          <Productcard key={product.ProductID} product={product} />
        ))}
      </div>
    </>
  );
};

export default Page;
