const {Router} = require('express');
const router = Router();
const axios = require('axios').default;


router.get('/', (req, res, next) => {
    axios.get('https://api.tvmaze.com/shows/1/episodes')
    .then(response => res.json(response.data))
    .catch(function(e){
        console.log(e)
    })
});

module.exports = router;