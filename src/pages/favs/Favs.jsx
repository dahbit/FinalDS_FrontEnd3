
import { useFavs } from "../../context/FavContext";
import styles from "./Favs.module.css";

const Favs = () => {
  const { favs, deleteToFavs } = useFavs();

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Favoritos</h1>
      {favs.length === 0 ? (
        <p className={styles.emptyMessage}>No hay personajes en favoritos</p>
      ) : (
        <ul className={styles.characterList}>
          {favs.map((character) => (
            <li key={character.id} className={styles.characterItem}>
              <h1 className={styles.title}>{character.name}</h1>
      <img
        src={character.image}
        alt={character.name}
        className={styles.image}
      />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
              <button
                className={styles.button}
                onClick={() => deleteToFavs(character.id)}
              >
                Eliminar de favoritos
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Favs;
