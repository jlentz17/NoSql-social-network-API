const router = require("express").Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    updateReaction,
    deleteReaction
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
    .put(createReaction)
    .put(updateReaction)
    .delete(deleteReaction)

router
    .route("/:user:id/:thoughtId/:reactionId")
    .delete(deleteReaction)

module.exports = router