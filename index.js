const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
const port = process.env.PORT || 3000; // El puerto puede ser una
                                      // variable de entorno o el 3000
/** Arrancar el server
  */
app.listen(port, () => {
  console.log(`API REST corriendo en http://localhost:${port}`);
})
app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json())

/** Funciones para peticiones GET:
  * @param '/hola', @type: String, da la ruta de la url.
  * @param (req, res), @type: String: Son los parámetros de gestión de la request y la response.
  * @method res.send, @param: message: 'hola mundo', @type: Object. Lanza el envío
  * de la respuesta con las propiedades pasadas en la configuración dle objeto, en este caso un mensaje.
  * @example:
  * app.get('/hola', (req, res) => {
  *   res.send({ message: 'hola mundoooor' })
  * })
  */
app.get('/', (req, res) => {
  res.send({ message: 'Hola! Debes loguearte para acceder a la aplicación!' })
});
app.get('/api/product', (req, res) => {

});

app.get('/api/product/:productId', (req, res) => {

});
// Tipo post
app.post('/api/product', (req, res) => {
// accedemos al cuerpo de la petición, con bodyParser como si fuese un json

  console.log(req.body);
  res.status(200).send({
    message: 'Producto recibido',
  })
});

//Tipo PUT
app.put('/api/product/:productId', (req, res) => {

})

// Por ultimo una ruta tipo delete para borrar productos:
app.delete('/api/product/:productId', (req, res) => {

})
