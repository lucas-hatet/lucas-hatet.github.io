import { useRef, useEffect, useState } from "react";

import './Card.css';

interface CardProps {
  image: string;
  title: string;
  school: string;
  city: string;
  country: string;
  startYear: number;
  endYear: number;
  skills: string[];
}
const Card = ({ image, title, school, city, country, startYear, endYear, skills }: CardProps) => {

  const contentRef = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState(200);

  const shineDelayRef = useRef<number>(Math.random() * 10);

  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.offsetHeight;
      setImageHeight(height);
    }
  }, [title, school, skills])

  return (
      <div className="card" style={{ backgroundImage: `url(${image})`, ['--shine-delay' as any]: `${shineDelayRef.current}s` }}>
            <div
              aria-label="Abstract gradient background"
              role="img"
              className="card-image"
              style={{ height: `calc(100% - ${imageHeight}px)` }}
            ></div>
            <div ref={contentRef} className="card-content">
              <h1 className="card-title">{ title }</h1>
              <p className="card-description">{ school }</p>
              <p className="card-description">{ city }, { country }</p>
            </div>
          </div>
  );
};

export default Card;
