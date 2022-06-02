import { useState } from 'react';
import AdviceCard from '../../components/advice/AdviceCard';
import NavHeader from '../../components/nav/NavHeader';

function AdvicePage() {
  const [isLoading, setLoading] = useState();

  const [adviceText, setAdviceText] = useState(
    "Never regret.If it's good, it's wonderful. If it's bad, it's experience."
  );
  const [adviceId, setAdviceId] = useState(143);

  const fetchAdvice = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ADVICE_API}`);
    const response = await res.json();

    setAdviceId(response.slip.id);
    setAdviceText(response.slip.advice);
  };

  const handleAdvice = () => {
    setLoading(true);
    fetchAdvice();
    setLoading(false);
  };
  return (
    <div className=' flex flex-col justify-center'>
      <NavHeader />
     
      <h1 className='text-center pt-12 text-emerald-200 font-bold text-2xl md:text-3xl tracking-wider'>
        Take an advice
      </h1>
      <div className='flex justify-center'>
        <AdviceCard
          adviceText={adviceText}
          id={adviceId}
          handleAdvice={handleAdvice}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default AdvicePage;
