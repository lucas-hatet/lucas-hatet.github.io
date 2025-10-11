import { useEffect, useState } from "react";
import '../styles/Parcours.css';
import Card from '../components/Card.tsx';

interface ParcoursItem {
  image: string;
  title: string;
  school: string;
  city: string;
  pays: string;
  startYear: number;
  endYear: number;
  skills: [string, string, string];
}

const Parcours = () => {
  const [parcoursData, setParcoursData] = useState<ParcoursItem[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const transformedData: ParcoursItem[] = data.parcours.map((item: any) => ({
          image: item.image,
          title: item.nom,
          school: item.etablissement,
          city: item.ville,
          pays: item.pays,
          startYear: item.debut.annee,
          endYear: item.fin.annee || "Actuel",
          skills: item.competences.map((c: any) => c.nom),
        }));
        setParcoursData(transformedData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <div className="parcours-grid">
        {parcoursData.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            school={item.school}
            city={item.city}
            country={item.pays}
            startYear={item.startYear}
            endYear={item.endYear}
            skills={item.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Parcours;