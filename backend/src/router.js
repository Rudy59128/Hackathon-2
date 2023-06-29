const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const smartphoneControllers = require("./controllers/smartphoneControllers");

router.get("/smartphones", smartphoneControllers.browse);
router.get("/smartphones/:id", smartphoneControllers.read);
router.put("/smartphones/:id", smartphoneControllers.edit);
router.post("/smartphones", smartphoneControllers.add);
router.delete("/smartphones/:id", smartphoneControllers.destroy);

const utilisateurControllers = require("./controllers/utilisateurControllers");

router.get("/utilisateurs", utilisateurControllers.browse);
router.get("/utilisateurs/:id", utilisateurControllers.read);
router.put("/utilisateurs/:id", utilisateurControllers.edit);
router.post("/utilisateurs", utilisateurControllers.add);
router.delete("/utilisateurs/:id", utilisateurControllers.destroy);

module.exports = router;
