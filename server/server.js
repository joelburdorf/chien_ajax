// requires
const express = require( 'express' );
const bodyParser = require( 'body-parser' );

// globals
const app = express();
const port = 5000;

// uses
app.use( express.static( 'server/public' ) );

// spin up server
app.listen( port, ( req, res )=>{
    console.log( 'server up on:', port );
}) // end spin up server