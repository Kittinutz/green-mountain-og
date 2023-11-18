import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

const ProductLanding = ({ products = [] }) => {
  return (
    <section className='flex justify-center py-12'>
      <div className='container'>
        <h1 className='text-6xl font-bold text-primary text-center'>Product</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
          {
            products.map(v => {
              return <ProductItem key={v.name} {...v} />
            })
          }
        </div>
      </div>

    </section>
  );
};

ProductLanding.propTypes = {
  // propName: PropTypes.string,
};

export default ProductLanding;