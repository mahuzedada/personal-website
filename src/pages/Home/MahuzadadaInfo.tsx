import React, { useState } from 'react';

export default function MahuzedadaInfo() {
  const [showInfo, setShowInfo] = useState(false);
  const [showFonInfo, setShowFonInfo] = useState(false);
  return (
    <>
      <div className="flex justify-end" onClick={() => setShowInfo(!showInfo)}>
        @<span className="underline cursor-pointer">mahuzedada</span>
      </div>

      {showInfo && (
        <div className="bg-gray-100 border border-gray-500 text-gray-700 px-4 py-3 rounded relative mb-4">
          <div className="bg-blue-100 border border-blue-500 text-blue-700 p-2 rounded-md">
            <div className="list-disc text-xs flex justify-end flex-wrap gap-x-1">
              <div className="underline">
                <a
                  href="https://twitter.com/mahuzedada"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  twitter/@mahuzedada
                </a>
              </div>
              <div className="underline">
                <a
                  href="https://github.com/mahuzedada"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  gitHub/@mahuzedada
                </a>
              </div>
              <div className="underline">
                <a
                  href="https://dev.to/mahuzedada"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dev.to/@mahuzedada
                </a>
              </div>
              <div className="underline">
                <a
                  href="https://www.youtube.com/channel/UCEy59hJCahrTAaxNytiQYTA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  youTube/@mahuzedada
                </a>
              </div>
              <div className="underline">
                <a
                  href="https://www.instagram.com/mahuzedada"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  instagram/@mahuzedada
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />
          <span className="block sm:inline">
            In{' '}
            <span
              onClick={() => setShowFonInfo(!showFonInfo)}
              className="underline cursor-pointer"
            >
              Fon
            </span>
            , the name "mahuzedada" can be broken down as follows:
          </span>
          {showFonInfo && (
            <div
              id="fonInfo"
              className="bg-white border border-gray-300 text-gray-800 px-4 py-3 rounded shadow-md"
            >
              <p>
                Fon is a language predominantly spoken in the West African
                nation of Benin, originating from the historical kingdom of
                Dahomey.
              </p>
            </div>
          )}

          <br />
          <span className="block sm:inline">
            <span className="font-bold">"mahu"</span> means "God",{' '}
            <span className="font-bold">"ze"</span> signifies "has chosen", and{' '}
            <span className="font-bold">"dada"</span> represents "the king"
          </span>
          <br />
          <span className="block sm:inline font-bold">
            "God has chosen the king"
          </span>
          <br />
          <span className="block sm:inline">
            Although the monarchs of my ancestral realm of Dahomey have
            customarily been designated as "dada", the essence of this term is
            more aligned with the concepts of "the leader" or "the guide" than
            the notion of "the ruler". The title carries with it a profound
            sense of responsibility. As a human being, I view myself as a
            driving force within my family, a paragon in my community, and a
            wellspring of hope and motivation for those who look up to me.
          </span>
        </div>
      )}
    </>
  );
}
