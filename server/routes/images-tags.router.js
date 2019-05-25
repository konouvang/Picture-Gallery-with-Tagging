const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//   '/all'
router.get('/all', (req,res) => {
    const queryString = `SELECT * FROM "images"
                    JOIN "images_tags" ON "images"."id"="images_tags"."images_id"
                    JOIN "tags" ON "images_tags"."tags_id"="tags"."id";`;

    pool.query(queryString)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});

router.get('/:images', (req,res) => {
    const queryString = `SELECT "title", "path" FROM "images"
                JOIN "images_tags" ON "images"."id"="images_tags"."images_id"
                JOIN "tags" ON "images_tags"."tags_id"="tags"."id"
                WHERE "title"=$1;`;

    pool.query(queryString, [req.params.images])
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});

// ?tags=""
router.get('/', (req,res) => {
    const queryString = `SELECT "title", "name" FROM "images"
                JOIN "images_tags" ON "images"."id"="images_tags"."images_id"
                JOIN "tags" ON "images_tags"."tags_id"="tags"."id"
                WHERE "tags_name"=$1;`;

    pool.query(queryString, [req.query.tags])
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log('err', err);
            res.sendStatus(500);
        })
});

router.post('/add', (req,res) => {
    const queryString = `INSERT INTO "images_tags" ("images_id", "tags_id")
                    VALUES ($1, $2);`;

    pool.query(queryString, [req.body.imagesId, req.body.tagsId])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});


module.exports = router;