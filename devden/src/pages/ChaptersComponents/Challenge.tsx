'use client'

import React, { useState } from 'react';
import styles from '../../styles/Challenge.module.css';

const Challenge = () => {
  const [code, setCode] = useState(`// Write your function here
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Test your function
console.log(reverseString('hello')); // Expected output: 'olleh'`);
  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      const userFunction = new Function(code + '; return reverseString;');
      const reverseString = userFunction();
  
      const testCases = ['hello', 'world', 'JavaScript', 'OpenAI'];
      let result = '';
      testCases.forEach(testCase => {
        const res = reverseString(testCase);
        const expectedResult = testCase.split('').reverse().join('');
        result += `reverseString('${testCase}') = '${res}' (Expected: '${expectedResult}')\n`;
      });
      setOutput(result);
    } catch (error) {
      if (error instanceof Error) {
        setOutput('Error: ' + error.message);
      } else {
        setOutput('Error: Unknown error');
      }
    }
  };
  

  return (
    <div className={styles.challenge}>
      <p className={styles.text}>Write a function that takes a string and returns it reversed.</p>
      <textarea
        className={styles.textarea}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={runCode} className={styles.button}>Run Code</button>
      <pre className={styles.output}>{output}</pre>
    </div>
  );
};

export default Challenge;
