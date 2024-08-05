// src/pages/ChaptersComponents/WelcomePage.tsx
import React from 'react';
import styles from '../../styles/WelcomePage.module.css'; // Adjust the relative path if needed

interface WelcomePageProps {
  title: string;
  description: string;
  buttonText: string;
  onContinue: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ title, description, buttonText, onContinue }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <button className={styles.button} onClick={onContinue}>{buttonText}</button>
    </div>
  );
};

export default WelcomePage;
