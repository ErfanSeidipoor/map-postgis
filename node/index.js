var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser')
const client = require('./db')
 
var app = express();
app.use(bodyParser.json())
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/public',express.static('public'))
 
app.get('/', function (req, res) {

    res.render('home',{data:'erfan'});
});

app.get('/attractions', (req, res)=>{
    client.query(`SELECT *, st_asgeojson(geom) as geojson  FROM public.cdmx_attractions ORDER BY name ASC `, (err, {rows}) => {
        res.json(rows)
    })
})
 
app.listen(3000);