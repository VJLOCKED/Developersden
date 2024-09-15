'use client';

import React from 'react';
import styles from '../../styles/InputComponent.module.css';

interface InputComponentProps {
  texts: string[];
}

const InputComponent: React.FC<InputComponentProps> = ({ texts }) => {
  return (
    <div className={styles.inputContainer}>
      {texts.map((text, index) => (
        <textarea
          key={index}
          value={text}
          readOnly
          className={styles.textarea}
          rows={3}
        />
      ))}
    </div>
  );
};

export default InputComponent;
