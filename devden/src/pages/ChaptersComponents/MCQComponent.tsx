import React, { useState } from 'react';
import styles from '../../styles/MCQComponent.module.css';

interface Option {
  id: string;
  label: string;
  value: string;
}

interface MCQComponentProps {
  question: string;
  codeSnippet: string;
  options: Option[];
  correctAnswer: string;
  onCorrectSelection: () => void;
}

const MCQComponent: React.FC<MCQComponentProps> = ({
  question,
  codeSnippet,
  options,
  correctAnswer,
  onCorrectSelection,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isLocked, setIsLocked] = useState<boolean>(false);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isLocked) {
      setSelectedOption(value);
      setIsCorrect(null); // Reset correctness on option change
      if (value === correctAnswer) {
        setIsCorrect(true);
        setIsLocked(true);
        onCorrectSelection(); // Notify Chapter1 of correct selection
      } else {
        setIsCorrect(false);
      }
    }
  };

  const handleOptionClass = (value: string) => {
    if (selectedOption === value) {
      return isCorrect ? styles.mcqOptionCorrect : styles.mcqOptionIncorrect;
    }
    return '';
  };

  const renderFeedbackIcon = (value: string) => {
    if (selectedOption === value) {
      return isCorrect ? <span className={styles.mcqCheckmark}>✔</span> : <span className={styles.mcqCrossmark}>✘</span>;
    }
    return null;
  };

  return (
    <div className={styles.mcqContainer}>
      <div className={styles.mcqHeader}>
        <h3 className={styles.mcqTitle}>{question}</h3>
      </div>
      <code className={styles.mcqQuestion}>
        <div className={styles.mcqCodeContainer} contentEditable="false">
          <pre className={styles.mcqCode}>{codeSnippet}</pre>
        </div>
        <div className={styles.mcqLanguage}>JavaScript</div>
      </code>
      <form className={styles.mcqForm}>
        {options.map((option) => (
          <div key={option.id} className={`${styles.mcqOption} ${handleOptionClass(option.value)}`}>
            <input
              type="radio"
              id={option.id}
              name="quiz"
              value={option.value}
              className={styles.mcqInput}
              onChange={handleOptionChange}
              checked={selectedOption === option.value}
              disabled={isLocked && selectedOption !== option.value}
            />
            <label className={styles.mcqLabel} htmlFor={option.id}>
              <div className={styles.mcqLabelBox}>
                {renderFeedbackIcon(option.value)}
              </div>
              <code className={styles.mcqLabelCode}>
                <div className={styles.mcqLabelCodeText}>
                  {option.label}
                </div>
                <div className={styles.mcqLabelCodeConsole}>Console</div>
              </code>
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default MCQComponent;

