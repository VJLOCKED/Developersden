// import React, { useState, useEffect } from 'react';
// import WelcomePage from '../ChaptersComponents/WelcomePage';
// import Challenge from '../ChaptersComponents/Challenge';
// import TextComponent from '../ChaptersComponents/TextComponent';
// import styles from '../../styles/Chapter.module.css'; // Import the CSS module

// const Chapter1 = () => {
//   const [currentStep, setCurrentStep] = useState<number>(1);
//   const [showComponent, setShowComponent] = useState<boolean[]>([]);
//   const [welcomeFaded, setWelcomeFaded] = useState<boolean>(false);

//   const components = [
//     {
//       type: 'welcome',
//       title: 'The console and introduction to variables',
//       description: "Let's make our first steps in JavaScript",
//       buttonText: 'Start',
//     },
//     {
//       type: 'text',
//       text: 'This is a paragraph of text for the text component.',
//     },
//     {
//       type: 'challenge',
//     },
//     {
//       type: 'text',
//       text: 'This is a paragraph of text for the text component.',
//     },
//     {
//       type: 'challenge',
//     },
//   ];

//   useEffect(() => {
//     if (currentStep > 1) {
//       setWelcomeFaded(true);
//       // Ensure the previous components start sliding up
//       setShowComponent((prev) => {
//         const newShowComponent = [...prev];
//         newShowComponent[currentStep - 2] = true;
//         return newShowComponent;
//       });
//     }
//   }, [currentStep]);

//   const handleStart = () => {
//     setCurrentStep(2);
//   };

//   const handleContinue = () => {
//     if (currentStep < components.length) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const renderComponent = (component: { type: string; text?: string }) => {
//     switch (component.type) {
//       case 'challenge':
//         return <Challenge />;
//       case 'text':
//         return <TextComponent text={component.text} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className={styles.container}>
//       {currentStep === 1 ? (
//         <div
//           className={`${styles['welcome-container']} ${welcomeFaded ? styles['welcome-fade-out'] : ''}`}
//         >
//           <WelcomePage
//             title={components[0].title}
//             description={components[0].description}
//             buttonText={components[0].buttonText}
//             onContinue={handleStart}
//           />
//         </div>
//       ) : (
//         <div className={styles['content-container']}>
//           {components.slice(1, currentStep).map((component, index) => (
//             <div
//               key={index}
//               className={`${styles['component-wrapper']} ${showComponent[index] ? styles['slide-up'] : ''}`}
//             >
//               {renderComponent(component)}
//             </div>
//           ))}
//         </div>
//       )}
//       {/* Only show the continue button if not on the welcome page */}
//       {currentStep > 1 && currentStep < components.length && (
//         <button onClick={handleContinue} className={styles['next-button']}>
//           Continue
//         </button>
//       )}
//     </div>
//   );
// };

// export default Chapter1;

import React, { useState, useEffect } from 'react';
import WelcomePage from '../ChaptersComponents/WelcomePage';
import Challenge from '../ChaptersComponents/Challenge';
import TextComponent from '../ChaptersComponents/TextComponent';
import styles from '../../styles/Chapter.module.css';

const Chapter1 = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showComponent, setShowComponent] = useState<boolean[]>(new Array(5).fill(false)); // Adjust length as needed
  const [welcomeFaded, setWelcomeFaded] = useState<boolean>(false);

  const components = [
    {
      type: 'welcome',
      title: 'The console and introduction to variables',
      description: "Let's make our first steps in JavaScript",
      buttonText: 'Start',
    },
    {
      type: 'text',
      text: 'This is a paragraph of text for the text component.',
    },
    {
      type: 'challenge',
    },
    {
      type: 'text',
      text: 'This is another paragraph of text for the text component.',
    },
    {
      type: 'challenge',
    },
  ];

  useEffect(() => {
    if (currentStep > 1) {
      setWelcomeFaded(true);
      setShowComponent((prev) => {
        const newShowComponent = [...prev];
        newShowComponent[currentStep - 2] = true;
        return newShowComponent;
      });
    }
  }, [currentStep]);

  const handleStart = () => {
    setCurrentStep(2);
  };

  const handleContinue = () => {
    if (currentStep < components.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderComponent = (component: { type: string; text?: string }) => {
    switch (component.type) {
      case 'challenge':
        return <Challenge />;
      case 'text':
        // Ensure text is defined or use an empty string
        return component.text ? <TextComponent text={component.text} /> : null;
      default:
        return null;
    }
  };

  const currentComponent = components[0]; // Safe access

  return (
    <div className={styles.container}>
      {currentStep === 1 ? (
        <div
          className={`${styles['welcome-container']} ${welcomeFaded ? styles['welcome-fade-out'] : ''}`}
        >
          <WelcomePage
            title={currentComponent.title || ''} // Provide default value
            description={currentComponent.description || ''} // Provide default value
            buttonText={currentComponent.buttonText || ''} // Provide default value
            onContinue={handleStart}
          />
        </div>
      ) : (
        <div className={styles['content-container']}>
          {components.slice(1, currentStep).map((component, index) => (
            <div
              key={index}
              className={`${styles['component-wrapper']} ${showComponent[index] ? styles['slide-up'] : ''}`}
            >
              {renderComponent(component)}
            </div>
          ))}
        </div>
      )}
      {currentStep > 1 && currentStep < components.length && (
        <button onClick={handleContinue} className={styles['next-button']}>
          Continue
        </button>
      )}
    </div>
  );
};

export default Chapter1;
