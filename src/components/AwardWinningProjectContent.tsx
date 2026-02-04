import React from 'react';

interface MediaAbout {
  overview: string;
  conclusion?: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

interface MediaContentProps {
  mediaType: 'video' | 'image';
  about: MediaAbout;
}

const MediaContent: React.FC<MediaContentProps> = ({ about }) => {
  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-6 text-black font-louis-george-cafe'>
        About This Project
      </h2>
      <p className='text-lg mb-8 text-black font-louis-george-cafe leading-relaxed'>
        <span dangerouslySetInnerHTML={{ __html: about.overview }} />
      </p>

      {about.conclusion && (
        <p className='text-lg mb-8 text-black font-louis-george-cafe leading-relaxed'>
          <span dangerouslySetInnerHTML={{ __html: about.conclusion }} />
        </p>
      )}
    </div>
  );
};

export default MediaContent;
export type { MediaAbout,   };