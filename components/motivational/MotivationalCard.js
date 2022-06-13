import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MotivationalButton from './MotivationalButton';

function MotivationalCard({
  author,
  motivationalText,
    handleMotivationalQuotes,
  isLoading,
}) {
  return (
    <div className='relative w-[350px] md:w-[450px] h-auto bg-[#323a49] mt-10 mb-20 px-8 pt-8 pb-16 rounded-xl flex flex-col justify-center items-center'>
      <FontAwesomeIcon icon={faStar} className='w-8 h-8 text-emerald-400' />
      <div className='text-lg md:text-2xl font-semibold text-gray-300 leading-8 text-center mt-4'>
        &quot;{motivationalText}&quot;
        <p className='text-xl font-semibold'> - {author}</p>
      </div>
      <hr className='w-[300px] border-t-1 border-gray-500 mt-8 bottom-16 mx-auto' />
      <div className='absolute -bottom-[30px] mx-aut right-8 '>
        <MotivationalButton
          handleMotivationalQuotes={handleMotivationalQuotes}
             isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default MotivationalCard;
