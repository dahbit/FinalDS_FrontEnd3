import { useParams } from "react-router-dom";
import styles from "./characterDetail.module.css";
import { useFavs } from "../../context/FavContext";

const characterDetail = () => {
  const { id } = useParams(); 
  const { characters } = useFavs();

 
  const character = characters.find((char) => char.id === parseInt(id));

  if (!character) {
    return <p className={styles.error}>Personaje no encontrado</p>;
  }

  return (
    <main className={styles.container}>
        <h1>Detalle del personaje {id}</h1>
      <h1 className={styles.title}>{character.name}</h1>
      <img
        src={character.image}
        alt={character.name}
        className={styles.image}
      />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
    </main>
  );
};


export default characterDetail;



