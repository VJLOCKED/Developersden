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
    { type: 'welcome', title: 'Create variables with const', description: "Now, we will learn how to create variables with const and look at the differences between let and const.", buttonText: 'Start' },
    { type: 'input', texts: ['• So far, we have created our variables with the let keyword.'] },
    { type: 'text', code: 'let test = 5;' },
    { type: 'input', texts: ['• You can also create a variable with the const keyword.'] },
    { type: 'text', code: 'const test = 5;' },
    { type: 'input', texts: ['• The difference between the two is that you can not assign a new value to a variable that was created with const.'] },
    { type: 'input', texts: ['• Try it out. Here, we attempt to assign a new value to a variable that was created with const.' ]},
    { type: 'challenge', initialInput: 'const test = 1;\ntest = 2;' }, 
    { type: 'input', texts: ['• Correct! It throws an error.'] },
    { type: 'input', texts: ["• Let's wrap this up with some questions."] },
    { type: 'mcq', question: "What will be the output?", codeSnippet: "let num;\nnum = 2;\nconsole.log(num);", options: [{ id: '9536450', label: '2', value: '0' }, { id: '9536451', label: 'undefined', value: '1' }], correctAnswer: '0' },
    { type: 'mcq', question: "What will be the output?", codeSnippet: "const num;\nnum = 5;\nconsole.log(num);", options: [{ id: '9536455', label: '5', value: '1' }, { id: '9536456', label: 'Uncaught SyntaxError: Missing initializer in const declaration', value: '0' }], correctAnswer: '0' },
    { type: 'mcq', question: "What will be the output?", codeSnippet: "const num = 2;\nnum = 6;\nconsole.log(num);", options: [{ id: '9536459', label: '2', value: '1' }, { id: '9536461', label: 'Uncaught TypeError: Assignment to constant variable', value: '0' }], correctAnswer: '0' },
    { type: 'input', texts: ["• But, why should you use const instead of let?"] },
    { type: 'input', texts: ['• It is considered good practice to use const for variables whose value will never change.'] },
    { type: 'input', texts: ['• For example, if you want to store the number pi you would use const to store it because pi never changes.'] },
    { type: 'text', code: 'const pi = 3.14159;' },
    { type: 'input', texts: ['• Doing so can prevent your code from behaving unexpectedly.'] },
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
