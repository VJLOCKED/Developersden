import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/Challenge.module.css';

interface ChallengeProps {
  initialInput: string;
  onSuccess: () => void;
}

const Challenge: React.FC<ChallengeProps> = ({ initialInput, onSuccess }) => {
  const [input] = useState(initialInput);  // Input remains unchanged, making it read-only
  const [output, setOutput] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);

  const codeRef = useRef<HTMLTextAreaElement>(null);
  const outputRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = (element: HTMLTextAreaElement) => {
    if (element) {
      element.style.height = 'auto'; // Reset height to auto
      element.style.height = `${element.scrollHeight}px`; // Set height based on content
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
      console.log = (msg: any) => {
        setOutput((prevOutput) => prevOutput + msg + '\n');
      };

      setOutput('');
      setIsSuccessful(false);

      const result = new Function(input)();
      if (result !== undefined) {
        console.log(result);
      }

      console.log = originalConsoleLog;
    } catch (error) {
      setOutput(error.toString());
    } finally {
      // Regardless of error, we consider the execution successful
      setIsSuccessful(true);
      onSuccess();
    }
  };

  return (
    <div className={styles.challengeContainer}>
      <div className={styles.codeBlock}>
        <textarea
          ref={codeRef}
          className={styles.codeLine}
          value={input} // The entire input is rendered as read-only
          readOnly
          rows={1}
        />
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
          rows={1}
        />
      </div>
    </div>
  );
};

export default Challenge;
