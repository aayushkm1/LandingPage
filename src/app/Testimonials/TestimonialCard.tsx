import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from '../Styles/testimonial.module.css';

interface TestimonialCardProps {
  testimonial: string;
  name: string;
  title: string;
  imageSrc: string | StaticImageData;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  name,
  title,
  imageSrc,
}) => {
  return (
    <div className={styles.testimonialCard}>
      <p className={styles.testimonialText}>{testimonial}</p>
      <div className={styles.testimonialProfile}>
        <Image
          src={imageSrc}
          alt={`${name} profile`}
          width={44}
          height={44}
          className={styles.profileImage}
        />
        <div className={styles.profileInfo}>
          <div className={styles.profileName}>{name}</div>
          <div className={styles.profileTitle}>{title}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;