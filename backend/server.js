const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const router = require( './routes/routes');
const mongoose = require('mongoose');
const cors = require('cors');
const jsonwebtoken = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const LocalStrategy = require('passport-local');
const morgan = require('morgan');

const corsOptions = {
  origin: 'http://localhost:3000/',
}

app.use( passport.initialize())
const JWTStrategy = passportJWT.Strategy;

require("./config/passport")(passport);

passport.use( new JWTStrategy({
  jwtFromRequest:  passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "jwt_secret"
}, (jwt_payload, done) =>  {

}))

const url = `mongodb+srv://tasksapp:tasksapp1234@tdcx-database.9qg4e.mongodb.net/tdcx-database?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
// app.use(cors);
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(router);
app.use(morgan('dev'))

app.listen( 4000 ,  (req, res ) => {
	console.log('Server started at port 4000');
})