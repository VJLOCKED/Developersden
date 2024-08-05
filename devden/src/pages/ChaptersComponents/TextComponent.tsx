'use client'

import React from 'react';
import styles from '../../styles/TextComponent.module.css';

interface TextComponentProps {
  text: string;
}

const TextComponent: React.FC<TextComponentProps> = ({ text }) => {
  return (
    <div className={styles.textComponent}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default TextComponent;
