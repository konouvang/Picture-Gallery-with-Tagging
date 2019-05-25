const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req,res) => {
    const queryString = `SELECT * FROM "images";`;

    pool.query(queryString)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});

router.post('/', (req,res) => {
    const queryString = `INSERT INTO "images" ("title")
                            VALUES ($1);`;

    pool.query(queryString, [req.body.title])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`err: ${err}`);
            res.sendStatus(500);
        })
});

router.put('/', (req,res) => {

});

router.delete('/', (req,res) => {

});

module.exports = router;