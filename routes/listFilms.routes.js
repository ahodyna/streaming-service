const router = require('express').Router();
const axios = require('axios').default;

router.get('/', (req, res, next) => {
    axios.get('https://api.tvmaze.com/shows')
        .then(response => res.json(response.data))
        .catch(function (e) {
            console.log(e)
        })
});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;

    axios.get('https://api.tvmaze.com/shows', { params: { id } })

        .then(response => res.json(response.data))

        .catch(function (e) {
            console.log(e)
        })

})

module.exports = router;