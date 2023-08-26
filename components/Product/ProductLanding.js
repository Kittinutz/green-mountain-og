import { getProduct } from '@/utils/product';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

const ProductLanding = async () => {
  return (
    <section className='flex justify-center py-12'>
      <div className='container'>
        <h1 className='text-6xl font-bold text-primary text-center'>Product</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
          {
            [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }].map(v => {
              return <ProductItem key={v.name} />
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