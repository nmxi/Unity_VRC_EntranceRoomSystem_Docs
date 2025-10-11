import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './ClickableImage.module.css';

interface ClickableImageProps {
  src: string;
  alt: string;
}

export default function ClickableImage({ src, alt }: ClickableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const imageSrc = useBaseUrl(src);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <img
        src={imageSrc}
        alt={alt}
        className={styles.clickableImage}
        onClick={handleClick}
      />
      {isOpen && (
        <div className={styles.modal} onClick={handleClose}>
          <div className={styles.modalContent} onClick={handleModalContentClick}>
            <img src={imageSrc} alt={alt} className={styles.modalImage} />
          </div>
          <span className={styles.close} onClick={handleClose}>&times;</span>
        </div>
      )}
    </>
  );
}