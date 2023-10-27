import React, { useState } from 'react';

type ContentComponentProps = {
  index: number;
  mainContent: string;
  detailedContent?: string;
  extraDetailedContent?: string;
};

const PoemParagraph: React.FC<ContentComponentProps> = ({
  index,
  mainContent,
  detailedContent,
  extraDetailedContent,
}) => {
  const [showDetailedContent, setShowDetailedContent] = useState(false);
  const [showExtraDetailedContent, setShowExtraDetailedContent] =
    useState(false);

  return (
    <div
      className={`p-4 rounded mb-2 border border-gray-300 dark:border-zinc-600 shadow-md ${
        index % 2 === 0 ? '' : ''
      }${showDetailedContent ? '' : ''}`}
    >
      <div
        className="cursor-pointer hover:underline"
        onClick={() => {
          setShowDetailedContent(!showDetailedContent);
        }}
        dangerouslySetInnerHTML={{ __html: mainContent }}
      />
      {showDetailedContent && detailedContent && (
        <div className="mt-4 max-w-md text-gray-800 bg-zinc-200 dark:text-zinc-100 dark:bg-zinc-600 px-4 py-3 rounded relative mb-4">
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
              className="text-gray-800 px-4 py-3 rounded shadow-md"
              dangerouslySetInnerHTML={{ __html: extraDetailedContent }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default PoemParagraph;
