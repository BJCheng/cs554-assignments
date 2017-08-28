const axios = require('axios');

axios({
    method: 'post',
    url: "http://localhost:3001",
    data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
    }
});