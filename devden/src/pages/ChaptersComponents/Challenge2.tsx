
import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/Challenge.module.css';

interface Challenge2Props {
  initialInput: string;
  onSuccess: () => void;
  editableLines: boolean[];
}

const Challenge2: React.FC<Challenge2Props> = ({ initialInput, onSuccess, editableLines }) => {
  const [input, setInput] = useState(initialInput); 
  const [output, setOutput] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);

  const codeRef = useRef<HTMLTextAreaElement>(null);
  const outputRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = (element: HTMLTextAreaElement) => {
    if (element) {
      element.style.height = 'auto'; 
      element.style.height = `${element.scrollHeight}px`; 
    }
  };

  useEffect(() => {
    if (codeRef.current) {
      adjustHeight(codeRef.current);
    }
    if (outputRef.current) {
      adjustHeight(outputRef.current);
    }
  }, [input, output]);

  const runCode = () => {
    try {
      const originalConsoleLog = console.log;
      let logOutput = ''; // Capture console output
  
      console.log = (msg: any) => {
        logOutput += msg + '\n'; // Accumulate log output
        setOutput(logOutput); // Set output state
      };
  
      setOutput('');  // Reset the output
      setIsSuccessful(false);
  
      // Execute the user's code
      const result = new Function(input)();
  
      // Restore original console.log after execution
      console.log = originalConsoleLog;
  
      // Check for valid log output or result
      const hasValidLogOutput = logOutput.trim() !== ''; 
      const hasValidResult = result !== undefined && result !== null && result !== '';
  
      // Check if the output or result is valid (i.e., not containing 'undefined')
      const validOutput = hasValidLogOutput ? logOutput : result ? result.toString() : '';
      
      // If the word 'undefined' does not appear in the output, trigger success
      if (validOutput && !validOutput.includes('undefined')) {
        setOutput(validOutput); // Display the output
        onSuccess(validOutput); // Pass valid output to ChapterWithChallenge
        setIsSuccessful(true); // Mark success
      } else {
        setOutput('No valid output returned');
      }
    } catch (error) {
      setOutput(error.toString()); // Display error in output
      setIsSuccessful(false); // Mark failure
    }
  };
  

  const handleInputChange = (index: number, e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const lines = input.split('\n');
    lines[index] = e.target.value;
    setInput(lines.join('\n'));
    setIsSuccessful(false);
  };

  const lines = input.split('\n');

  return (
    <div className={styles.challengeContainer}>
      <div className={styles.codeBlock}>
        {lines.map((line, index) => (
          editableLines[index] ? (
            <textarea
              key={index}
              className={styles.codeLine}
              value={line}
              onChange={(e) => handleInputChange(index, e)}
              rows={1}
            />
          ) : (
            <div
              key={index}
              className={styles.codeLine}
              dangerouslySetInnerHTML={{ __html: line }}
            />
          )
        ))}
        <button
          className={`${styles.runButton} ${isSuccessful ? styles.disabled : ''}`}
          onClick={runCode}
          disabled={isSuccessful}
        >
          Run
        </button>
      </div>
      <div className={styles.outputBlock}>
        <textarea
          ref={outputRef}
          className={styles.outputContainer}
          value={output}
          readOnly
          rows={3}
        />
      </div>
    </div>
  );
};

export default Challenge2;
