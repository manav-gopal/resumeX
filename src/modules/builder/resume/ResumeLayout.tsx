import { Context, createContext, useEffect } from 'react';

import { AVAILABLE_TEMPLATES } from 'src/helpers/constants';
import { ThemeProvider } from '@mui/material/styles';
import { useResumeStore } from 'src/stores/useResumeStore';
import { useTemplates } from 'src/stores/useTemplate';
import { useThemes } from 'src/stores/themes';
import { useZoom } from 'src/stores/useZoom';
import { useMediaQuery } from '@mui/material';

// TODO: need to define types
export let StateContext: Context<any> = createContext(null);

export const ResumeLayout = () => {
  const resumeData = useResumeStore();
  const zoom = useZoom((state) => state.zoom);

  const templateId = useTemplates((state) => state.activeTemplate.id);
  const Template = AVAILABLE_TEMPLATES[templateId].component;
  const selectedTheme = useThemes((state) => state.selectedTheme);
  StateContext = createContext(resumeData);

  useEffect(() => {
    const selectedTemplateId =
      localStorage.getItem('selectedTemplateId') || AVAILABLE_TEMPLATES['modern'].id;
    useTemplates.getState().setTemplate(AVAILABLE_TEMPLATES[selectedTemplateId]);
  }, []);

  const isMobile = useMediaQuery('(max-width: 700px)');

  return (
    <div className="mx-5 print:mx-0 mb-2 print:mb-0">
      <div
        style={{ transform: `scale(${isMobile ? 0.4 : zoom}) translateX(${isMobile ? '-75%': '0%'})`, width: `${isMobile ? '250%': '100%'}` }}
        className="w-full origin-top transition-all duration-300 ease-linear print:!scale-100"
      >
        <div className="sm:w-full sm:h-auto md:w-[210mm] md:h-[296mm] bg-white my-0 mx-auto">
          <StateContext.Provider value={resumeData}>
            <ThemeProvider theme={selectedTheme}>{Template && <Template />}</ThemeProvider>
          </StateContext.Provider>
        </div>
      </div>
    </div>
  );
};
