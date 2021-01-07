const express = require('express');
const app = express();

const port = '3001';
const FRONT_URL = 'http://localhost:3000';

const sample_images = [

    {img : 'https://cdn.pixabay.com/photo/2020/12/19/03/27/person-5843476_960_720.jpg'},
    {img : 'https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_960_720.jpg'},
    {img : 'https://cdn.pixabay.com/photo/2014/09/07/21/52/city-438393_960_720.jpg'},
    {img : 'https://cdn.pixabay.com/photo/2014/12/16/22/25/sunset-570881_960_720.jpg'},
]

const sample_texts = [
    {text : 'El oeste de Texas divide la frontera entre Mexico y Nuevo México. Es muy bella pero aspera, llena de cactus, en esta region se encuentran las Davis Mountains. Todo el terreno esta lleno de piedra caliza, torcidos arboles de mezquite y espinosos nopales. Para admirar la verdadera belleza desertica, visite el Parque Nacional de Big Bend, cerca de Brownsville. Es el lugar favorito para los excurcionistas, acampadores y entusiastas de las rocas. Pequeños pueblos y ranchos se encuentran a lo largo de las planicies y cañones de esta region. El area solo tiene dos estaciones, tibia y realmente caliente. La mejor epoca para visitarla es de Diciembre a Marzo cuando los dias son tibios, las noches son frescas y florecen las plantas del desierto con la humedad en el aire.'},
    {text : 'La sociedad francesa estaba dividida en estamentos dependiendo de sus clases sociales, el poder mas alto lo tenía el rey, detrás estaban la nobleza y el clero y el nivel mas bajo de poder lo tenia el tercer estado que estaba constituido por la burguesía, los artesanos y los campesinos.'},
    {text : 'Al día de hoy Mi Viaje por el Mundo es uno de los blogs más leídos en Latinoamérica por lo que si estás buscando una forma de llegar a una audiencia más grande para dar a conocer tu proyecto, eres un blogger que está comenzando y quiere aprender más sobre cómo escribir contenido de calidad y hacer crecer tu blog o simplemente te interesa compartir tus experiencias con miles de personas, entonces has llegado al lugar indicado.'},
    {text : 'Nos encanta conocer los pequeños secretos que solo conocen los lugareños. Como por ejemplo, los bares clandestinos. ¿Quién se iba a imaginar que uno de los bares más baratos para beber en París se encuentra dentro de lo que parece una lavandería? Una de las lavadoras te llevará a un colorido y animado bar.'},
]

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', FRONT_URL);
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.get('/images', (req, res) => {
    res.send(sample_images);
});

app.get('/texts', (req, res) => {
    res.send(sample_texts);
});

app.listen(port, ()=>{
    console.log(`listen in port 3001`);
});