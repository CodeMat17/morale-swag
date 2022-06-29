import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react';
import Card from '../../components/Card';
import NavHeader from '../../components/nav/NavHeader';
import AuthContext from '../../context/auth';

function MotivationalPage() {
  const { userJWT } = useContext(AuthContext);
  
  const router = useRouter();

  useEffect(() => {
    if (userJWT == null) {
      router.push('/auth/sign-in');
    }
  }, [userJWT, router]);

  const [isLoading, setLoading] = useState(false);
  const [indexNo, setIndexNo] = useState(1);

  const [quoteText, setQuoteText] = useState(
    'Sometimes you have to forget what you want to remember what you deverse.'
  );
  const [quoteAuthor, setQuoteAuthor] = useState('');

  const handleQuotes = async () => {
    setLoading(true);
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    setIndexNo(Math.floor(Math.random() * (185 - 1 + 1) + 1));

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API}/api/proverbs/${indexNo}`
    );
    const response = await res.json();

    setQuoteAuthor(response.data.attributes.author);
    setQuoteText(response.data.attributes.text);
    setLoading(false);
  };

  return (
    <div className='flex flex-col justify-center'>
      <NavHeader />

      <h1 className='text-center pt-12 text-emerald-200 font-bold text-2xl md:text-3xl tracking-wider'>
       African Proverbs
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
  );
}

export default MotivationalPage;
