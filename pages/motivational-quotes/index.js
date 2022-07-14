import { getSession } from 'next-auth/react';
import Head from 'next/head';
import { useContext, useState } from 'react';
import Card from '../../components/Card';
import NavHeader from '../../components/nav/NavHeader';
import SubscribeButton from '../../components/SubscribeButton';
import AuthContext from '../../context/auth';

function MotivationalPage() {
  const { userSubscription } = useContext(AuthContext);

  const [isLoading, setLoading] = useState(false);
  const [indexNo, setIndexNo] = useState(1);

  const [showPost, setShowPost] = useState(false);
  const [showNoSub, setShowNoSub] = useState(false);
  const [showExpiredSub, setShowExpiredSub] = useState(false);

  const [quoteText, setQuoteText] = useState(
    'Start where you are. Use what you have. Do what you can.'
  );
  const [quoteAuthor, setQuoteAuthor] = useState('Arthur Ashe');

  const handleQuotes = async () => {
    setLoading(true);
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    setIndexNo(Math.floor(Math.random() * (211 - 1 + 1) + 1));

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API}/api/motivationals/${indexNo}`
    );
    const response = await res.json();

    setQuoteAuthor(response.data.attributes.author);
    setQuoteText(response.data.attributes.text);
    setLoading(false);
  };

  return (
    <div className='flex flex-col justify-center'>
      <Head>
        <title>Morale Swag | Motivational Quotes</title>
        <meta name='description' content='Morale Swag' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavHeader />
      <div>
        {userSubscription === true ? (
          <div>
            <h1 className='text-center pt-12 text-lime-500 font-bold text-2xl md:text-3xl tracking-wider'>
              Get motivated
            </h1>
            <div className='flex justify-center'>
              <Card
                isLoading={isLoading}
                quoteAuthor={quoteAuthor}
                quoteText={quoteText}
                handleQuotes={handleQuotes}
              />
            </div>
          </div>
        ) : (
          <div className='text-center px-8 py-12 max-w-md mx-auto'>
            <div className='bg-red-100 rounded-md py-8 text-red-500'>
              <h1 className='text-center tracking-wider px-4'>
                You have not subscribed OR your subscription for this service
                has expired.
              </h1>

              <SubscribeButton />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default MotivationalPage;

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
