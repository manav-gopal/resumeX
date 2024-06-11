import React, { useState } from 'react';

import DataHeaders from './components/EditHeaders';
import EditSection from './components/EditSection';
import ErrorBoundary from 'src/helpers/common/components/ErrorBoundary';
import { OutlinedButton } from 'src/helpers/common/atoms/Buttons';
import { headers } from 'src/helpers/constants/editor-data';
import { resetResumeStore } from 'src/stores/useResumeStore';

const EditorLayout = () => {
  const [link, setLink] = useState('');
  const section = headers[link];

  const linkClickHandler = (link: string) => {
    setLink(link);
  };

  const displayElement = link ? (
    <EditSection section={section} onLinkClick={linkClickHandler} />
  ) : (
    <DataHeaders onLinkClick={linkClickHandler} />
  );

  return (
    <ErrorBoundary>
      <div className="bg-white h-full text-resume-800 p-6 overflow-auto relative no-scrollbar shadow-lg shadow-color-blue-400 border-black-300 border-[1px] rounded-tl-[15px]">
        {displayElement}

        <div className="mt-8">
          <OutlinedButton onClick={resetResumeStore}>Reset all edits</OutlinedButton>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default EditorLayout;
