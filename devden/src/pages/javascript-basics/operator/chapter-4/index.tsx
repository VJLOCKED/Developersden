import React, { useState, useEffect, useRef } from "react";
import WelcomePage from "@/pages/ChaptersComponents/WelcomePage";
import Challenge from "@/pages/ChaptersComponents/Challenge";
import TextComponent from "@/pages/ChaptersComponents/TextComponent";
import InputComponent from "@/pages/ChaptersComponents/InputComponent";
import Breadcrumb from "@/pages/component/Breadcrumb";
import ProgressBar from "@/pages/ChaptersComponents/ProgressBar";
import EndPage from "@/pages/ChaptersComponents/EndPage";
import MCQComponent from "@/pages/ChaptersComponents/MCQComponent";
import styles from "../../../../styles/Chapter.module.css";
import { useRouter } from "next/router";

const Chapter4: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showComponent, setShowComponent] = useState<boolean[]>(
    new Array(13).fill(false)
  );
  const [challengeSuccess, setChallengeSuccess] = useState<boolean[]>(
    new Array(4).fill(false)
  );
  const [mcqSuccess, setMcqSuccess] = useState<boolean>(false);
  const [showEndPage, setShowEndPage] = useState<boolean>(false);

  const router = useRouter();
  const componentRef = useRef<HTMLDivElement>(null);

  const components = [
    {
      type: "welcome",
      title: "Introduction to Javascript Comparision Operators ll",
      description:
        "We already know how to use the Equal To and Not Equal To operators. Let's look at some more comparison operators.",
      buttonText: "Start",
    },
    {
      type: "input",
      texts: [
        "• Let's look at other types of comparison operators.",
        "• The Greater than (>) operator checks if the left value is greater than the right value. For example:",
        "•Can you guess what the output will be?"
      ],
    },
    { type: "text", code: "2  > 1  // checks if 2 is greater than 1" },
    { type: "input", texts: ["• Can you guess what the output will be?"] },
    {
      type: "challenge",
      initialInput:
        "const priceOne = 5;\nconst priceTwo = 10;\nconsole.log(priceOne > priceTwo);\nconsole.log(priceTwo > priceOne);",
      editableLines: [false, false, false, false],
    }, // Example editableLines array
    {
      type: "input",
      texts: [
        "• The Less than (<) operator checks if the left value is less than the right value. For example:",
      ],
    },
    { type: "text", code: "2  < 1  // checks if 2 is less than 1" },
    { type: "input", texts: ["• Let's use the Less than operator in the example for above:"] },
    {
      type: "challenge",
      initialInput:
        "const priceOne = 5;\nconst priceTwo = 10;\nconsole.log(priceOne < priceTwo);\nconsole.log(priceTwo < priceOne);",
      editableLines: [false, false, false, false],
    }, // Example editableLines array
    {
      type: "input",
      texts: [ 
        "• Similar to the operators above, there are also the Less than or equal (<=) and Greater than or equal (>=) operators. For example:",
      ],
    },
    { type: "text", code: "2 <= 1 // checks if 2 is less than or equal 1\n2 >= 1 // checks if 2 is greater than or equal 1" },
    {
      type: "input",
      texts: [ 
        "• Here's an example of how to use them:",
      ],
    },
    {
      type: "challenge",
      initialInput: "const priceOne = 10;\nonst priceTwo = 15;\nconst priceThree = 10;\nconsole.log(priceOne >= priceTwo);\nconsole.log(priceOne >= priceThree);\nconsole.log(priceOne <= priceTwo);\nconsole.log(priceOne <= priceThree);",
      editableLines: [false, false, false, false, false, false, false],
    }, // Example editableLines array
    {
      type: "mcq",
      question: "What will be the output?",
      codeSnippet: `console.log(2 < 1);`,
      options: [
        { id: "9536450", label: "true", value: "0" },
        { id: "9536451", label: "false", value: "1" },
      ],
      correctAnswer: "1",
    },
    {
      type: "mcq",
      question: "What will be the output?",
      codeSnippet: `const priceOne = 1;\nconst priceTwo = 1;\nconst priceThree = 2\nconsole.log(priceOne <= priceTwo);\nconsole.log(priceOne <= priceThree);`,
      options: [
        { id: "9536460", label: "true false", value: "0" },
        { id: "9536461", label: "false true", value: "1" },
        { id: "9536462", label: "true true", value: "2" },
      ],
      correctAnswer: "2",
    },
  ];

  const endPageLink = "/javascript-basics/operator";

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
    if (
      currentStep === components.length &&
      challengeSuccess.every((success) => success) &&
      mcqSuccess
    ) {
      setShowEndPage(true);
    }
  }, [currentStep, challengeSuccess, mcqSuccess]);

  useEffect(() => {
    if (componentRef.current) {
      componentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
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
    setChallengeSuccess((prev) => {
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
      case "challenge":
        return (
          <Challenge
            initialInput={component.initialInput || ""}
            editableLines={component.editableLines || []}
            onSuccess={() =>
              handleChallengeSuccess(components.indexOf(component))
            }
          />
        );
      case "text":
        return component.code ? (
          <TextComponent code={component.code} />
        ) : component.text ? (
          <TextComponent text={component.text} />
        ) : null;
      case "input":
        return component.texts ? (
          <InputComponent texts={component.texts} />
        ) : null;
      case "mcq":
        return component.question &&
          component.codeSnippet &&
          component.options &&
          component.correctAnswer ? (
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

  const progressPercentage =
    ((currentStep - 1) / (components.length - 1)) * 100;

  const currentComponent = components[currentStep - 1];
  const isChallengeOrMcq =
    currentComponent.type === "challenge" || currentComponent.type === "mcq";
  const isButtonEnabled =
    !isChallengeOrMcq ||
    (isChallengeOrMcq &&
      (currentComponent.type === "challenge"
        ? challengeSuccess[components.indexOf(currentComponent)]
        : mcqSuccess));

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
            <div className={styles["content-container"]}>
              {components.slice(1, currentStep).map((component, index) => (
                <div
                  key={index}
                  className={`${styles["component-wrapper"]} ${
                    showComponent[index] ? styles["slide-up"] : ""
                  }`}
                  ref={index === currentStep - 2 ? componentRef : null}
                >
                  {renderComponent(component, index)}
                </div>
              ))}
              {currentStep <= components.length && (
                <button
                  onClick={handleContinue}
                  className={`${styles["next-button"]} ${
                    !isButtonEnabled ? styles["disabled"] : ""
                  }`}
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

export default Chapter4;
