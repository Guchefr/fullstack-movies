import client from "../../../database/client";
import type { Rows } from "../../../database/client";

const readMovies = () => {
  return client.query("SELECT * FROM movie;");
};

const readMovieById = (id: number) => {
  return client.query<Rows>("SELECT * FROM movie WHERE id = ?", [id]);
};

export default { readMovies, readMovieById };
