import Image from 'next/image';
import PropTypes from 'prop-types';
import Logo from '@/public/asset/logo-green-mountain-og.svg'
const HeaderNavigator = () => {
  return (
    <div className='flex py-5 px-4 top-0 bg-[white] z-50 border-black shadow-md fixed w-full items-center justify-between'>
      <Image src={Logo} alt='Green mountain og logo' />
      <div className='hidden md:block text-[#000] flex space-x-6'>
        <a className='hover:text-[red] hover:underline'>
          Product
        </a>
        <a>Review</a>
        <a>Contract Us</a>
      </div>
      <button className='hidden md:block bg-primary px-4 py-1 rounded bg-primary text-[white] font-semibold'>
        What&#39;s app
      </button>
    </div>
  );
};

HeaderNavigator.propTypes = {
  // propName: PropTypes.string,
};

export default HeaderNavigator;