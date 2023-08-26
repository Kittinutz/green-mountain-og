import PropTypes from 'prop-types';

const Button = ({ children, onClick = () => { } }) => {

  return (
    <button
      className='px-4 py-1 rounded bg-primary text-[white] font-semibold'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  // propName: PropTypes.string,
};

export default Button;