// require('dotenv').config();
// const server = require('./api/server');
//
//
//
// const port = process.env.PORT || 4000;
//
// server.listen(port, () => console.log(`listening on port ${port}`));

require('dotenv').config();

const server = require('./api/server');

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`running on port 4000`)
})












































