import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/Challenge.module.css';

interface ChallengeProps {
  initialInput: string;
  onSuccess: () => void;
  editableLines: boolean[];
}

const Challenge: React.FC<ChallengeProps> = ({ initialInput, onSuccess, editableLines }) => {
  const [input, setInput] = useState(initialInput);
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
      setIsSuccessful(true);
      onSuccess();
    } catch (error) {
      setOutput(error.toString());
      setIsSuccessful(false);
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
          rows={1}
        />
      </div>
    </div>
  );
};

export default Challenge;
