import React from 'react';
import Nav from './nav';


function Catalogue() {
  return (
    <div className="bg-teal-700 max-h-screen">
      <div>
        <Nav />
        <div className="flex flex-col md:flex-row space-x-7 items-center py-8 px-4 md:px-20">
          <div className="md:w-1/2">
            <p className="text-white font-mono text-2xl text-center md:text-left">
              Avians - Where Style Takes Flight!
            </p>
            <p className="text-white text-justify mt-4 text-lg">
              Avians is a premier clothing brand that soars above the rest. Our
              designs embrace the grace and freedom of avian creatures,
              translating them into timeless fashion statements. With each
              garment, we celebrate individuality, blending modern trends with
              ethereal allure. Step into a world of elegance and confidence, as
              Avians invites you to embrace your own unique style and soar to
              new fashion heights. Discover the art of Avians and let your
              fashion journey take flight!
            </p>
          </div>
          <div className="flex justify-center md:w-1/2">
            <img src={'./Avians.png'} alt="The Avians Clothing" className="h-56 w-56 object-contain md:h-80 md:w-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalogue;
