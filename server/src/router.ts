import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

import movieActions from "./modules/movie/movieActions";

router.get("/movies", movieActions.getMovies);

router.get("/movies/:id", movieActions.getOne);

router.post("/movies", movieActions.postMovie);

/* ************************************************************************* */

export default router;
