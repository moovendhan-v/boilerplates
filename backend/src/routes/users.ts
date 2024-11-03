import express from "express";

const router = express.Router();

router.get("/me", (req, res) => {
    res.json({"welocome": "welcome to boilerplates"})
});


export default router;