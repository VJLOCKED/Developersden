'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import InputComponent from '@/pages/ChaptersComponents/InputComponent'; // Adjust the path as needed
import TextComponent from '@/pages/ChaptersComponents/TextComponent'; // Adjust the path as needed 
import Challenge from '@/pages/ChaptersComponents/Challenge'; // Adjust the path as needed
import styles from '@/styles/Chapter2.module.css'; // Import the CSS module

const Chapter2: React.FC = () => {
  const router = useRouter();

  const handleSuccess = () => {
    router.push('/javascript-basics/variables');
  };

  // Define editableLines based on your requirements
  const editableLines = [false, true, false]; // Adjust this as needed

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <InputComponent texts={['Reassign a value to a variable']} />
        <TextComponent 
          code={`Assign a new value to the variable num. The code will not work the way it is. Find the mistake and fix it. Execute the corrected code.`} 
        />
        <Challenge
          initialInput={`let num = 1;\nlet num = 2;\nconsole.log(num);`} // Example initial input
          onSuccess={handleSuccess}
          editableLines={editableLines} // Pass the editableLines array
        />
      </div>
      <button
        className={styles.nextButton}
        onClick={() => router.push('/variables')}
      >
        Next
      </button>
    </div>
  );
};

export default Chapter2;
