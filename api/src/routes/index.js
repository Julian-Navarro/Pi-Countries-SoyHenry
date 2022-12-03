const { Router } = require("express");
const countriesRouter = require("./controllers/countriesControllers.js");
const activitiesRouter = require("./controllers/activitiesControllers.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/countries", countriesRouter);
router.use("/activities", activitiesRouter);

// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
