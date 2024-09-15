import React from 'react';
import styles from '../../styles/TextComponent.module.css';

interface TextComponentProps {
  code?: string;  // Optional code prop
}

const TextComponent: React.FC<TextComponentProps> = ({ code }) => {
  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeContainer}>
        <code dangerouslySetInnerHTML={{ __html: code || '' }} />
      </div>
      <div className={styles.languageLabel}>JavaScript</div>
    </div>
  );
};

export default TextComponent;