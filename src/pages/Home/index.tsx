import React from 'react';
import PoemParagraph from './PoemParagraph';
import poem from './poem';
import SocialLinks from './SocialLinks';
import MahuzedadaInfo from './MahuzadadaInfo';
import avatar from '../../assets/avatar.jpg';

const Home: React.FC = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center">
          <img
            src={avatar}
            alt="Chatis Santos"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full mr-4"
          />
          <h1 className="text-3xl font-bold">Chatis Santos</h1>
        </div>

        <div className="mt-2">
          <div className="container mx-auto py-2">
            {poem.map((paragraph, index) => (
              <PoemParagraph
                index={index}
                key={Math.random()}
                mainContent={paragraph.mainContent}
                detailedContent={paragraph.detailedContent}
                extraDetailedContent={paragraph.extraDetailedContent}
              />
            ))}
          </div>
          <SocialLinks />
          <MahuzedadaInfo />
        </div>
      </div>
    </div>
  );
};

export default Home;
