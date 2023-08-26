import PropTypes from 'prop-types';
import Cannabis from '@/public/asset/img.png'
import Image from 'next/image';
import Happy from '@/public/asset/feel/happy.svg'
import Relaxed from '@/public/asset/feel/relaxed.svg'
import Hungry from '@/public/asset/feel/hungry.svg'
import Sleepy from '@/public/asset/feel/sleepy.svg'
import Euphoric from '@/public/asset/feel/euphoric.svg'
import TalkActive from '@/public/asset/feel/talkActive.svg'
const ProductItem = ({
  name = 'Platinum Kush Breath',
  type = 'Hybrid',
  recommended = false,
  terpene = 'Caryophyllene',
  effective = ' Anti - Inflammatory',
  smell = [
    'Sour cherries and gasoline accompany notes of light grape',
    'orange and incense'
  ],
  feelings = [
    'happy',
    'hungry',
    'relaxed',
    'sleepy',
    'euphoric',
    'talkactive'
  ]
}) => {
  const mapping = {
    'happy': Happy,
    'hungry': Hungry,
    'relaxed': Relaxed,
    'sleepy': Sleepy,
    'euphoric': Euphoric,
    'talkactive': TalkActive
  }

  return (
    <div className='w-full p-3'>
      <div className='rounded-2xl border border-[#D2D5DA] p-4 drop-shadow	bg-white'>
        <div className='flex'>
          <div className='w-1/4 flex items-center justify-center' >
            <Image src={Cannabis} alt="cannabis" />
          </div>
          <div className='w-3/4 gap-4' >
            <div className='flex gap-2'>
              <p className='block text-[#581C87] font-semibold text-xs bg-[#F3E8FF] w-max py-1 px-2 rounded'>
                {type}
              </p>
              {recommended &&
                <p className='block text-black font-semibold text-xs bg-[#FEF08A] w-max py-1 px-2 rounded'>
                  Recommended
                </p>
              }
            </div>
            <div className='mt-2'>
              <h1 className='text-lg font-bold text-3xl'>
                {name}
              </h1>
            </div>
          </div>
        </div>
        <div className='flex mt-2'>
          <div className='w-1/3'>
            <p>
              THC
            </p>
            <p className='text-xl font-bold'>
              {`>`} 20%
            </p>
          </div>
          <div className='w-1/3'>
            <p>
              CBD
            </p>
            <p className='text-xl font-bold'>
              {`<`} 1%
            </p>
          </div>
          <div className='w-1/3'>
            <p>
              Rate
            </p>
            <p className='text-xl font-bold'>
              8.1
            </p>
          </div>
        </div>
        <div className='flex flex-wrap gap-2 mt-2 md:hidden'>
          {
            feelings.map(feel => {
              return (
                <div key={feel} className='flex items-center gap-2 block text-black text-xs bg-[#F3F4F6]   py-1 px-2 rounded'>
                  <Image src={mapping[feel]} alt={feel} />
                  <p className='capitalize'>
                    {feel}
                  </p>
                </div>
              )
            })
          }
        </div>
        <div className='flex-col mt-2'>
          <div className='flex my-2'>
            <p className='w-1/3 text-[#6D7280]'>
              Terpene
            </p>
            <p className='w-3/4 font-semibold'>
              {terpene}
            </p>
          </div>
          <div className='flex my-2'>
            <p className='w-1/3 text-[#6D7280]'>
              Effective
            </p>
            <p className='w-3/4 font-semibold'>
              {effective}
            </p>
          </div>
          <div className='flex my-2'>
            <p className='w-1/3 text-[#6D7280]'>
              Smell
            </p>
            <p className='w-3/4 font-semibold'>
              {smell.join(', ')}.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap gap-2 mt-2'>
          {
            feelings.map(feel => {
              return (
                <div key={feel} className='flex items-center gap-2 block text-black text-xs bg-[#F3F4F6]   py-1 px-2 rounded'>
                  <Image src={mapping[feel]} alt={feel} />
                  <p className='capitalize'>
                    {feel}
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div >
  );
};

ProductItem.propTypes = {
  // propName: PropTypes.string,
};

export default ProductItem;