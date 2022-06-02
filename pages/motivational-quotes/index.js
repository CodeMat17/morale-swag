import { useState } from 'react';
import MotivationalCard from '../../components/motivational/MotivationalCard';
import NavHeader from '../../components/nav/NavHeader';

function MotivationalPage() {
  const [isLoading, setLoading] = useState(false);

  const [motivationalText, setMotivationalText] = useState(
    'Start where you are. Use what you have. Do what you can.'
  );
  const [author, setAuthor] = useState('Arthur Ashe');

  const fetchMotivational = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API}/api/${getRandomInt(4)}`
    );
    const response = await res.json();

    setAuthor(response.attributes.author);
    setMotivationalText(response.attributes.text);
  };

  const handleMotivationalQuotes = async () => {
    setLoading(true);
    function getRandomInt(max) {
      return Math.floor(Math.random() * max + 1);
    }

    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_STRAPI_API
      }/api/motivational-quotes/${getRandomInt(18)}`
    );
    const response = await res.json();

    setAuthor(response.data.attributes.author);
    setMotivationalText(response.data.attributes.text);
    setLoading(false);
  };

  return (
    <div className='flex flex-col justify-center'>
      <NavHeader />

      <h1 className='text-center pt-12 text-emerald-200 font-bold text-2xl md:text-3xl tracking-wider'>
       Get motivated
      </h1>
      <div className='flex justify-center'>
        <MotivationalCard
          isLoading={isLoading}
          author={author}
          motivationalText={motivationalText}
          handleMotivationalQuotes={handleMotivationalQuotes}
        />
      </div>
    </div>
  );
}

export default MotivationalPage;