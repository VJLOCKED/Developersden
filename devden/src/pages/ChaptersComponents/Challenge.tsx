// import React, { useState, useRef, useEffect } from 'react';
// import styles from '../../styles/Challenge.module.css';

// interface ChallengeProps {
//   initialInput: string;
//   onSuccess: () => void; // Callback when the code runs successfully
// }

// const Challenge: React.FC<ChallengeProps> = ({ initialInput, onSuccess }) => {
//   const [input, setInput] = useState(initialInput);
//   const [output, setOutput] = useState('');
//   const [isSuccessful, setIsSuccessful] = useState(false);

//   const codeRef = useRef<HTMLTextAreaElement>(null);
//   const outputRef = useRef<HTMLTextAreaElement>(null);

//   // Adjust height of the textarea based on content
//   const adjustHeight = (element: HTMLTextAreaElement) => {
//     if (element) {
//       element.style.height = 'auto'; // Reset height to auto
//       element.style.height = `${element.scrollHeight}px`; // Set height based on content
//     }
//   };

//   useEffect(() => {
//     if (codeRef.current) {
//       adjustHeight(codeRef.current);
//     }
//     if (outputRef.current) {
//       adjustHeight(outputRef.current);
//     }
//   }, [input, output]);

//   const runCode = () => {
//     try {
//       const originalConsoleLog = console.log;
//       console.log = (msg: any) => {
//         setOutput((prevOutput) => prevOutput + msg + '\n');
//       };

//       setOutput('');
//       setIsSuccessful(false);

//       const result = new Function(input)();
//       if (result !== undefined) {
//         console.log(result);
//       }

//       console.log = originalConsoleLog;
//       setIsSuccessful(true);
//       onSuccess(); // Notify parent component that the code ran successfully
//     } catch (error) {
//       setOutput(error.toString());
//       setIsSuccessful(false);
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setInput(e.target.value);
//     setIsSuccessful(false); // Re-enable the run button if input changes
//   };

//   return (
//     <div className={styles.challengeContainer}>
//       <div className={styles.codeBlock}>
//         <textarea
//           ref={codeRef}
//           className={styles.codeContainer}
//           value={input}
//           onChange={handleInputChange}
//           rows={1} // Start with one row, grow as needed
//         />
//         <button
//           className={`${styles.runButton} ${isSuccessful ? styles.disabled : ''}`}
//           onClick={runCode}
//           disabled={isSuccessful}
//         >
//           Run
//         </button>
//       </div>
//       <div className={styles.outputBlock}>
//         <textarea
//           ref={outputRef}
//           className={styles.outputContainer}
//           value={output}
//           readOnly
//           rows={1} // Start with one row, grow as needed
//         />
//       </div>
//     </div>
//   );
// };

// export default Challenge;

import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/Challenge.module.css';

interface ChallengeProps {
  initialInput: string;
  onSuccess: () => void; // Callback when the code runs successfully
  editableLines: boolean[]; // Array indicating which lines are editable
}

const Challenge: React.FC<ChallengeProps> = ({ initialInput, onSuccess, editableLines }) => {
  const [input, setInput] = useState(initialInput);
  const [output, setOutput] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);

  const codeRef = useRef<HTMLTextAreaElement>(null);
  const outputRef = useRef<HTMLTextAreaElement>(null);

  // Adjust height of the textarea based on content
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
      onSuccess(); // Notify parent component that the code ran successfully
    } catch (error) {
      setOutput(error.toString());
      setIsSuccessful(false);
    }
  };

  const handleInputChange = (index: number, e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const lines = input.split('\n');
    lines[index] = e.target.value;
    setInput(lines.join('\n'));
    setIsSuccessful(false); // Re-enable the run button if input changes
  };

  const lines = input.split('\n');

  return (
    <div className={styles.challengeContainer}>
      <div className={styles.codeBlock}>
        {lines.map((line, index) => (
          editableLines[index] ? (
            <textarea
              key={index}
              className={styles.codeContainer}
              value={line}
              onChange={(e) => handleInputChange(index, e)}
              rows={1} // Start with one row, grow as needed
            />
          ) : (
            <div
              key={index}
              className={styles.readOnlyLine}
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
          rows={1} // Start with one row, grow as needed
        />
      </div>
    </div>
  );
};

export default Challenge;
