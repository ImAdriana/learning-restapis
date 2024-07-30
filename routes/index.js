import express from 'express';
const router = express.Router();

// module.exports = function () {
router.get('/', (req, res) => {
    res.send('inicio');
});
router.get('/nosotros', (req, res) => {
    res.send('nosotros');
});

export default router;
// };
