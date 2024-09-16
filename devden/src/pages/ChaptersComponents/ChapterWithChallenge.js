import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/ChapterWithChallenge.module.css'; // Ensure your path matches
import Challenge from './Challenge'; // Import your Challenge component
import Breadcrumb from '@/pages/component/Breadcrumb';

const ChapterWithChallenge = ({ heading, question, initialInput, editableLines }) => {
  const [challengeSuccess, setChallengeSuccess] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const router = useRouter();

  const handleSuccess = () => {
    setChallengeSuccess(true);
    setShowOverlay(true);
  };

  const handleNext = () => {
    router.push('/javascript-basics/variables');
  };

  return (
    <div className={styles.container}>
      <Breadcrumb />
      <h1 className={styles.header}>{heading}</h1>
      <div className={styles.question}>{question}</div>
      <Challenge
        initialInput={initialInput}
        onSuccess={handleSuccess}
        editableLines={editableLines}
      />
      {challengeSuccess && (
        <>
          <div className={`${styles.overlay} ${showOverlay ? styles.show : ''}`} />
          <div className={`${styles.console} ${styles.show}`}>
            <p>Congratulations!</p>
            <button className={styles.nextButton} onClick={handleNext}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChapterWithChallenge;
