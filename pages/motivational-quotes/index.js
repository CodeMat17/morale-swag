import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Card from '../../components/Card';
import NavHeader from '../../components/nav/NavHeader';
import AuthContext from '../../context/auth';

function MotivationalPage() {
  const { userEmail, userName, userJWT, userSubscription } =
    useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (userJWT == null) {
      router.push('/auth/sign-in');
    }
  }, [userJWT, router]);

  const [isLoading, setLoading] = useState(false);
  const [indexNo, setIndexNo] = useState(1);

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
      <NavHeader />

      {userJWT && (
        <>
          {!userSubscription ? (
            <div className='px-8 pt-12'>
              <p className='text-white'>{userSubscription}</p>
              <h3 className='text-center text-white font-bold text-xl tracking-widest'>
                NO ACCESS!
              </h3>
              <p className='text-center text-gray-300 text-lg tracking-wider pt-4'>
                {userName} You are signed in but you have not subscribed for
                this service. Kindly subscribe to have access to enrich your
                knowledge and wisdom.
              </p>
              <div className='flex justify-center mt-6'>
                <button className='bg-gray-300 px-5 py-3 rounded-md tracking-wider font-semibold'>
                  SUBSCRIBE
                </button>
              </div>
            </div>
          ) : (
            <>
              <h1 className='text-center pt-12 text-emerald-200 font-bold text-2xl md:text-3xl tracking-wider'>
                Get motivated
              </h1>
              <button onClick={signOut}>Sign out</button>
              <div className='flex justify-center'>
                <Card
                  isLoading={isLoading}
                  quoteAuthor={quoteAuthor}
                  quoteText={quoteText}
                  handleQuotes={handleQuotes}
                />
              </div>
            </>
          )}
        </>
      )
      //   : (
      //   <div className='flex justify-center pt-20'>
      //     <button
      //       onClick={() => router.push('/auth/sign-in')}
      //       className='bg-gray-300 px-6 py-3 rounded-md font-semibold text-lg tracking-widest'>
      //       SIGN IN
      //     </button>
      //   </div>
      // )
      }
    </div>
  );
}

export default MotivationalPage;
