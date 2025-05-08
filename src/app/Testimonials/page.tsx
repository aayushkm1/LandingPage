import React from 'react';
import styles from '../Styles/testimonial.module.css';
import TestimonialCard from './TestimonialCard';
import StarIcon from './StarIcon';
import Image1 from '../../../Assets/Rectangle 74 (1).jpg'
import Image2 from '../../../Assets/Rectangle 74 (2).jpg'
import Image3 from '../../../Assets/Rectangle 74.jpg'
import Image4 from '../../../Assets/Rectangle 74 (3).jpg'
import Image5 from '../../../Assets/Rectangle 74 (4).jpg'
import Image6 from '../../../Assets/Rectangle 74 (5).jpg'
import Image7 from '../../../Assets/Rectangle 74 (6).jpg'
import Image8 from '../../../Assets/Rectangle 74 (7).jpg'
import Image9 from '../../../Assets/Rectangle 74 (8).jpg'

const Testimonials: React.FC = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      testimonial: 'UX Magic.ai has revolutionised my workflow. The AI-driven sitemap and wireframe generation have saved me countless hours, letting me focus more on creativity and less on tedious tasks.',
      name: 'Riya Patel',
      title: 'Product Designer',
      imageSrc: Image1
    },
    {
      id: 2,
      testimonial: 'As a freelancer, time is money. UX Magic.ai has been a game-changer, allowing me to deliver high-quality designs faster and more efficiently. My clients love the results!',
      name: 'Ethan Williams',
      title: 'Freelancer',
      imageSrc: Image2
    },
    {
      id: 3,
      testimonial: 'UX Magic.ai has transformed the way our agency works. From quick design generation to effortless reports, we\'re now delivering top-notch projects in record time. It\'s a must-have tool for any agency.',
      name: 'Emily Johnson',
      title: 'Marketing Agency Owner',
      imageSrc: Image3
    },
    {
      id: 4,
      testimonial: 'UXMagic.ai is like having a junior designer who never sleeps. I feed it ideas, and it spits out structure, flow, and wireframes in minutes. Total productivity booster.',
      name: 'Arjun Mehta',
      title: 'UX Lead, Fintech Startup',
      imageSrc: Image4
    },
    {
      id: 5,
      testimonial: 'I used to spend hours planning sitemaps. Now? 10 minutes, max. UXMagic.ai gives me back my time and my sanity',
      name: 'Laura Kim',
      title: 'Freelance Product Designer',
      imageSrc: Image5
    },
    {
      id: 6,
      testimonial: 'It\'s not just a tool, it\'s my secret weapon. Clients think I work overnight. I don\'t — UXMagic does.',
      name: 'Olivia Garcia',
      title: 'Founder, Studio D',
      imageSrc: Image6
    },
    {
      id: 7,
      testimonial: 'Honestly, I was skeptical. But after using UXMagic.ai for one week, it became non-negotiable. It\'s made collaboration smoother and iteration way faster.',
      name: 'Dev Mishra',
      title: 'Design Manager, SaaS Company',
      imageSrc: Image7
    },
    {
      id: 8,
      testimonial: 'The auto-generated wireframes actually get it. Like, context-aware get it. Cuts down 50% of my back-and-forth with stakeholders.',
      name: 'Kabir Shah',
      title: 'Senior UX Designer',
      imageSrc: Image8
    },
    {
      id: 9,
      testimonial: 'Perfect for small teams. We don\'t have time or budget to do everything from scratch. UXMagic.ai gives us a solid head start every time.',
      name: 'Tanvi Verma',
      title: 'Co-founder, HealthTech Startup',
      imageSrc: Image9
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>
          Proof That
          <div className={styles.inlineContainer}>
            <StarIcon /> Magic is <span className={styles.gradientText}>Real!</span>
          </div>
        </h2>
      </div>
      
      <div className={styles.testimonialsSection}>
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial.testimonial}
              name={testimonial.name}
              title={testimonial.title}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;