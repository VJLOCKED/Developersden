import React, { useState, useEffect, useRef } from 'react';
import WelcomePage from '@/pages/ChaptersComponents/WelcomePage';
import Challenge from '@/pages/ChaptersComponents/Challenge';
import TextComponent from '@/pages/ChaptersComponents/TextComponent';
import InputComponent from '@/pages/ChaptersComponents/InputComponent';
import Breadcrumb from '@/pages/component/Breadcrumb';
import ProgressBar from '@/pages/ChaptersComponents/ProgressBar';
import EndPage from '@/pages/ChaptersComponents/EndPage';
import MCQComponent from '@/pages/ChaptersComponents/MCQComponent';
import styles from '../../../../styles/Chapter.module.css';
import { useRouter } from 'next/router';

const Chapter1: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showComponent, setShowComponent] = useState<boolean[]>(new Array(13).fill(false));
  const [challengeSuccess, setChallengeSuccess] = useState<boolean[]>(new Array(4).fill(false));
  const [mcqSuccess, setMcqSuccess] = useState<boolean>(false);
  const [showEndPage, setShowEndPage] = useState<boolean>(false);

  const router = useRouter();
  const componentRef = useRef<HTMLDivElement>(null);

  const components = [
    { type: 'welcome', title: 'The console and introduction to variables', description: "Let's make our first steps in JavaScript", buttonText: 'Start' },
    { type: 'input', texts: ['• By assigning a number to a variable, the variable automatically has the type Number.', '• Press the button to run the following code snippet:'] },
    { type: 'challenge', initialInput: 'console.log(1);', editableLines: [true] }, // Example editableLines array
    { type: 'input', texts: ['• As you can see, console.log() simply displays information in your JavaScript console — in this case the value 1.', '• We will use console.log() as a tool to test our code.', '• Great! Now, we can talk about JavaScript variables.', '• Variables are containers that store information for later use.', "• Let's create our first variable:"] },
    { type: 'text', code: 'let test;' },
    { type: 'input', texts: ['• We use the let keyword to declare a variable with the name test. Declaring a variable is JavaScript slang for creating a variable.', '• But, what happens if we use console.log() to log our new variable?'] },
    { type: 'challenge', initialInput: 'let test;\nconsole.log(test);', editableLines: [true, false] }, // Example editableLines array
    { type: 'input', texts: ['• The console prints undefined. This is because we have not initialized our variable. Initializing a variable is the process of assigning a value to it.', '• We can assign a value to a variable with the assignment operator =.'] },
    { type: 'challenge', initialInput: 'let test;\ntest = 1;\nconsole.log(test);', editableLines: [true, true, false] }, // Example editableLines array
    { type: 'input', texts: ['• Great! Now, we have created a new variable and assigned it the value 1. We have also used console.log() to access this value.', '• You can also assign a value to a variable directly when you create it.'] },
    { type: 'challenge', initialInput: 'let test = 1;\nconsole.log(test);', editableLines: [true, false] }, // Example editableLines array
    { type: 'input', texts: ["• Awesome! Let's wrap this up with some questions."] },
    { type: 'mcq', question: "What will be the output of the following code?", codeSnippet: `let num;\nconsole.log(num);`, options: [{ id: '9536450', label: 'undefined', value: '0' }, { id: '9536451', label: 'num', value: '1' }], correctAnswer: '0' }
  ];

  const endPageLink = '/javascript-basics/variables';

  useEffect(() => {
    if (currentStep > 1) {
      setTimeout(() => {
        setShowComponent((prev) => {
          const newShowComponent = [...prev];
          newShowComponent[currentStep - 2] = true;
          return newShowComponent;
        });
      }, 500);
    }
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === components.length && challengeSuccess.every(success => success) && mcqSuccess) {
      setShowEndPage(true);
    }
  }, [currentStep, challengeSuccess, mcqSuccess]);

  useEffect(() => {
    if (componentRef.current) {
      componentRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [currentStep]);

  const handleStart = () => {
    setCurrentStep(2);
  };

  const handleContinue = () => {
    if (showEndPage) {
      router.push(endPageLink); // Redirect to variables page
    } else if (currentStep < components.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowEndPage(true); // Show EndPage when all components are done
    }
  };

  const handleChallengeSuccess = (index: number) => {
    setChallengeSuccess(prev => {
      const newSuccess = [...prev];
      newSuccess[index] = true;
      return newSuccess;
    });
  };

  const handleMcqSuccess = () => {
    setMcqSuccess(true);
  };

  const renderComponent = (
    component: {
      type: string;
      text?: string;
      texts?: string[];
      code?: string;
      initialInput?: string;
      editableLines?: boolean[];
      question?: string;
      codeSnippet?: string;
      options?: Option[];
      correctAnswer?: string;
    },
    index: number
  ) => {
    switch (component.type) {
      case 'challenge':
        return (
          <Challenge
            initialInput={component.initialInput || ''}
            editableLines={component.editableLines || []}
            onSuccess={() => handleChallengeSuccess(components.indexOf(component))}
            onFailure={() => handleChallengeSuccess(components.indexOf(component))} // Continue on failure
          />
        );
      case 'text':
        return component.code ? <TextComponent code={component.code} /> : component.text ? <TextComponent text={component.text} /> : null;
      case 'input':
        return component.texts ? <InputComponent texts={component.texts} /> : null;
      case 'mcq':
        return component.question && component.codeSnippet && component.options && component.correctAnswer ? (
          <MCQComponent
            question={component.question}
            codeSnippet={component.codeSnippet}
            options={component.options}
            correctAnswer={component.correctAnswer}
            onCorrectSelection={handleMcqSuccess}
          />
        ) : null;
      default:
        return null;
    }
  };
  

  const progressPercentage = ((currentStep - 1) / (components.length - 1)) * 100;

  const currentComponent = components[currentStep - 1];
  const isChallengeOrMcq = currentComponent.type === 'challenge' || currentComponent.type === 'mcq';
  const isButtonEnabled = !isChallengeOrMcq || (isChallengeOrMcq && (currentComponent.type === 'challenge' ? challengeSuccess[components.indexOf(currentComponent)] : mcqSuccess));

  return (
    <div>
      <Breadcrumb />
      <ProgressBar percentage={progressPercentage} />
      {showEndPage ? (
        <EndPage
          title="Lesson complete!"
          description="You are ready for some exercises"
          buttonText="Continue"
          link={endPageLink} // Redirect link to variables page
        />
      ) : (
        <>
          {currentStep === 1 ? (
            <WelcomePage
              title={components[0].title}
              description={components[0].description}
              buttonText={components[0].buttonText}
              onContinue={handleStart}
            />
          ) : (
            <div className={styles['content-container']}>
              {components.slice(1, currentStep).map((component, index) => (
                <div
                  key={index}
                  className={`${styles['component-wrapper']} ${showComponent[index] ? styles['slide-up'] : ''}`}
                  ref={index === currentStep - 2 ? componentRef : null}
                >
                  {renderComponent(component, index)}
                </div>
              ))}
              {(currentStep <= components.length) && (
                <button
                  onClick={handleContinue}
                  className={`${styles['next-button']} ${!isButtonEnabled ? styles['disabled'] : ''}`}
                  disabled={!isButtonEnabled}
                >
                  Continue
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Chapter1;
