import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getSession } from 'next-auth/react';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import Head from 'next/head';

function Paid() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('Status: PAID!');
  const [isSending, setSending] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        form.current,
        `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Payment notification sent.');
          setSending(false);
        },
        (error) => {
          console.log(error.text);
          toast.error('Something went wrong!');
          setSending(false);
        }
      );
  };

  return (
    <div className='px-8'>
      <Head>
        <title>Morale Swag | Payment</title>
        <meta name='description' content='Morale Swag' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='max-w-sm mx-auto text-center py-16'>
        <FontAwesomeIcon
          icon={faSquareCheck}
          className='w-12 h-12 pt-8 text-lime-500'
        />
        <h3 className='text-lime-500 tracking-widest'>
          Transaction completed.
        </h3>
        <p className='text-sm text-white'>
          For a faster subscription access, submit the form below.
        </p>
        <form ref={form} onSubmit={sendEmail} className='py-8 space-y-4'>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Enter name used for the payment'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='rounded-md w-full outline-none'
          />
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter email used for subscription'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='rounded-md w-full outline-none'
          />
          <input
            type='text'
            name='message'
            id='message'
            value={message}
            className='rounded-md w-full outline-none text-lime-600 font-semibold tracking-widest'
          />
          <div className='pt-4'>
            <button
              type='submit'
              disabled={isSending}
              className={` bg-lime-500 w-full py-3 rounded-md text-sm font-semibold tracking-widest text-white`}>
              {isSending ? 'SUBMITTING...' : 'SUBMIT'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Paid;

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  // Check if session exists or not, if not, redirect
  if (session == null) {
    return {
      redirect: {
        destination: '/auth/sign-in',
        permanent: true,
      },
    };
  }
  return {
    props: {},
  };
}
