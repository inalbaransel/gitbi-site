import img1 from '../assets/images/img8.png';
import img2 from '../assets/images/img8.png';
import img3 from '../assets/images/img8.png';
import img4 from '../assets/images/img8.png';
import img5 from '../assets/images/img8.png';
import img6 from '../assets/images/img8.png';
import img7 from '../assets/images/img8.png';


import PropTypes from 'prop-types';

function Row({ translateClass, direction }) {

    const items = 
       [
  { text: "faydalı", image: img7 },
  { text: "sezgisel", image: img2 },
  { text: "duyarlı", image: img3 },
  { text: "işlevsel", image: img4 },
  { text: "anlayışlı", image: img5 },
  { text: "pratik", image: img2 },
  { text: "etkili", image: img4 },
  { text: "kullanıcıDostu", image: img5 },
  { text: "akıcı", image: img2 },
  { text: "hassas", image: img6 },
  { text: "verimli", image: img1 },
  { text: "gereksinimeYatkın", image: img6 },
  { text: "çözümOdaklı", image: img5 },
  { text: "zahmetsiz", image: img2 },
  { text: "kapsamlı", image: img4 },
];
  return (
    <div 
        className={`${translateClass} ${direction} row w-full flex 
        items-center  
        gap-8 
        whitespace-nowrap mb-2`}
    >
        {items.map((item, index) => {
            return (
                <div 
                    key={index} 
                    className='elem flex items-center gap-8'
                >
                    <h1 
                        className='font-[SansitaBold] text-[6vh] sm:text-[8.4vh] 
                        leading-[6vh] sm:leading-[9vh]'
                    >
                        {item.text}
                    </h1>
                    <div className='imgdiv w-[5vh] h-[5vh]'>
                        <img 
                            className=''
                            src={item.image} 
                        />
                    </div>
                </div>
            )
        })}
    </div>
  )
}

Row.propTypes = {
    translateClass: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired
  };

export default Row
