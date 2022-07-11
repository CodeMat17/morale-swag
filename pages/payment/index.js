import { useState } from 'react';
import NavHeader from '../../components/nav/NavHeader';

function Payment() {
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [isPaying, setPaying] = useState(false);

//   const SquadPay = async () => {
//     const squadInstance = await squad({
//       onClose: () => console.log('Widget closed'),
//       onLoad: () => console.log('Widget loaded successfully'),
//       onSuccess: () => console.log('Linked successfully'),
//       key: `${process.env.NEXT_PUBLIC_SQUADKEY}`,
//       email,
//       amount: `${process.env.NEXT_PUBLIC_SQUAD_AMOUNT}`,
//       currency_code: 'NGN',
//     });
//     squadInstance.setup();
//     squadInstance.open();
//   };

  return (
    <div>
      <NavHeader />

      <div className='p-8 max-w-sm mx-auto text-white'>
        <h1 className='text-center font-bold text-xl tracking-wider'>
          SUBSCRIBE
        </h1>
        <h3 className='text-lime-500 text-center font-semibold tracking-wider'>
          AMOUNT: N1,250 PER HALF A YEAR.
        </h3>
        <form  className='pt-8 space-y-4'>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full text-lime-500 rounded-md outline-none'
          />
          <input
            type='text'
            name='firstname'
            id='firstname'
            placeholder='Enter your first name'
            required
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className='w-full text-lime-500 rounded-md outline-none'
          />

          <input
            type='text'
            name='lastname'
            id='lastname'
            placeholder='Enter your last name'
            required
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className='w-full text-lime-500 rounded-md outline-none'
          />
          <div className='py-2'>
            <button
            //   onClick={SquadPay}
              className={`${
                isPaying ? 'bg-red-900 text-gray-500' : 'bg-red-500 text-white'
              } py-3 rounded-md w-full text-sm font-semibold tracking-wider`}>
              {isPaying ? 'PAYING...' : 'PAY NOW'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
