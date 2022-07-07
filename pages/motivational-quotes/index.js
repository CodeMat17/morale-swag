import { getSession } from 'next-auth/react';
import { useContext, useState } from 'react';
import Card from '../../components/Card';
import NavHeader from '../../components/nav/NavHeader';
import AuthContext from '../../context/auth';

function MotivationalPage() {
  const { userEmail, userName, userJWT, userSubscription } =
    useContext(AuthContext);

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
