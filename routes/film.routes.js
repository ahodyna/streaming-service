const {Router} = require('express');
const router = Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
    axios.get('https://api.tvmaze.com/shows')
    .then(response => res.json(response.data.slice(0,10)))          // TODO: parameters
    .catch(function(e){
        console.log(e)
    })
});

module.exports = router;