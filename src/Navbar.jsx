import { FaCartPlus } from 'react-icons/fa';
import { FaWater } from 'react-icons/fa6';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { totalAmount } = useGlobalContext();
  return (
    <nav>
      <div className='nav-center'>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
          <FaWater
            style={{ fontSize: '2.5rem', color: 'var(--primary-300)' }}
          />
          <h4 style={{ display: 'flex', flexDirection: 'column' }}>
            <span>onWave</span>
            <span
              style={{
                fontSize: '.5rem',
                fontWeight: '400',
                alignSelf: 'flex-start',
                color: 'var(--primary-200)',
              }}
            >
              useReducer
            </span>
            <span
              style={{
                fontSize: '.5rem',
                fontWeight: '400',
                alignSelf: 'flex-end',
                color: 'var(--primary-200)',
              }}
            >
              Context API
            </span>
          </h4>
        </div>
        <div className='nav-container'>
          <FaCartPlus className='cart-icon' />
          <div className='amount-container'>
            <p className='total-amount'>{totalAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
