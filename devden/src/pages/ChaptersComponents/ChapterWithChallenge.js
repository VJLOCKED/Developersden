// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import styles from '../../styles/ChapterWithChallenge.module.css'; // Ensure your path matches
// import Challenge2 from './Challenge2'; // Import your Challenge component
// import Breadcrumb from '@/pages/component/Breadcrumb';

// const ChapterWithChallenge = ({ heading, question, initialInput, editableLines }) => {
//   const [challengeSuccess, setChallengeSuccess] = useState(false);
//   const [showOverlay, setShowOverlay] = useState(false);
//   const router = useRouter();

//   const handleSuccess = (output) => {
//     // Ensure that 'undefined' is not part of the output and no errors occurred
//     const isValidOutput = output && output !== 'undefined' && !output.includes('undefined') && output !== 'No valid output returned';

//     // Only show the popup if output is valid
//     if (isValidOutput) {
//       setChallengeSuccess(true);
//       setShowOverlay(true);
//     }
//   };

//   const handleNext = () => {
//     router.push('/javascript-basics/variables');
//   };

//   return (
//     <div className={styles.container}>
//       <Breadcrumb />
//       <h1 className={styles.header}>{heading}</h1>
//       <div className={styles.question}>{question}</div>
//       <Challenge2
//         initialInput={initialInput}
//         onSuccess={handleSuccess} // Pass the output for validation
//         editableLines={editableLines}
//       />
//       {challengeSuccess && (
//         <>
//           <div className={`${styles.overlay} ${showOverlay ? styles.show : ''}`} />
//           <div className={`${styles.console} ${styles.show}`}>
//             <p>Congratulations!</p>
//             <button className={styles.nextButton} onClick={handleNext}>
//               Next
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default ChapterWithChallenge;

import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/ChapterWithChallenge.module.css'; // Ensure your path matches
import Challenge2 from './Challenge2'; // Import your Challenge component
import Breadcrumb from '@/pages/component/Breadcrumb';

const ChapterWithChallenge = ({ heading, question, initialInput, editableLines, nextLink }) => {
  const [challengeSuccess, setChallengeSuccess] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const router = useRouter();

  const handleSuccess = (output) => {
    // Ensure that 'undefined' is not part of the output and no errors occurred
    const isValidOutput = output && output !== 'undefined' && !output.includes('undefined') && output !== 'No valid output returned';

    // Only show the popup if output is valid
    if (isValidOutput) {
      setChallengeSuccess(true);
      setShowOverlay(true);
    }
  };

  const handleNext = () => {
    router.push(nextLink); // Use dynamic nextLink prop
  };

  return (
    <div className={styles.container}>
      <Breadcrumb />
      <h1 className={styles.header}>{heading}</h1>
      <div className={styles.question}>{question}</div>
      <Challenge2
        initialInput={initialInput}
        onSuccess={handleSuccess} // Pass the output for validation
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
