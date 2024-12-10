import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { useFavs } from "../../context/FavContext";
import React from "react";

const Home = () => {
  const { addToFavs, characters } = useFavs();

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Personajes Rick & Morty</h1>
      <ul className={styles.characterList}>
        {characters.map((character) => (
          <li key={character.id} className={styles.characterItem}>
            <img src={character.image} alt={character.name} className={styles.image} />
            <div>
              <strong>{character.name}</strong> - {character.status}
            </div>
            <Link to={`/characterDetail/${character.id}`} className={styles.link}>
              Ver detalles
            </Link>
            <button
              className={styles.button}
              onClick={() => addToFavs(character)}
            >
              Agregar a favoritos
              </button>
          </li>
        ))}
      </ul>
      
      <Link to="/favs" className={styles.link}>Ir a favoritos</Link>
      <Link to="/contactForm" className={styles.link}> Contáctanos</Link>
       
      
    </main>
  );
};

export default Home;

