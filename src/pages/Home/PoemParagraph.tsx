import React, { useState } from 'react';

type ContentComponentProps = {
  mainContent: string;
  detailedContent?: string;
  extraDetailedContent?: string;
};

const PoemParagraph: React.FC<ContentComponentProps> = ({
  mainContent,
  detailedContent,
  extraDetailedContent,
}) => {
  const [showDetailedContent, setShowDetailedContent] = useState(false);
  const [showExtraDetailedContent, setShowExtraDetailedContent] =
    useState(false);

  return (
    <div
      className={`p-4 rounded-xl mb-8 ${
        showDetailedContent ? 'shadow-xl' : ''
      }`}
    >
      <div
        className="cursor-pointer hover:underline"
        onClick={() => {
          setShowDetailedContent(!showDetailedContent);
        }}
        dangerouslySetInnerHTML={{ __html: mainContent }}
      />
      {showDetailedContent && detailedContent && (
        <div className="mt-4 bg-gray-100 max-w-md border border-gray-500 text-gray-700 px-4 py-3 rounded relative mb-4">
          <span
            className={`block sm:inline ${
              extraDetailedContent ? 'cursor-pointer hover:underline' : ''
            }`}
            onClick={() => {
              setShowExtraDetailedContent(!showExtraDetailedContent);
            }}
            dangerouslySetInnerHTML={{ __html: detailedContent }}
          />
          {showExtraDetailedContent && extraDetailedContent && (
            <div
              className="bg-white border border-gray-300 text-gray-800 px-4 py-3 rounded shadow-md"
              dangerouslySetInnerHTML={{ __html: extraDetailedContent }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default PoemParagraph;
