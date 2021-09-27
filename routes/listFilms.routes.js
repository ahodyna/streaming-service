const {Router} = require('express');
const router = Router();
const axios = require('axios');


router.get('/films', (req, res, next) => {
    axios.get('https://api.tvmaze.com/shows')
    .then(response => res.json(response.data))   
    .catch(function(e){
        console.log(e)
    })
});

module.exports = router;