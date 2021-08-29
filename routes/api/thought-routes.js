const router = require("express").Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require("../../controllers/thought-controller")

router
    .route("/:userId")
    .get(getAllThought)
    .post(createThought)

router
    .route("/:userId/:thoughtId")
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

module.exports = router