import ColeccionPeliculas from './src/ColeccionPeliculas.js';
import Libro from './src/Libro.js';
import Musica from './src/Musica.js';
import Pelicula from './src/Pelicula.js';


const coleccionPeliculas = new ColeccionPeliculas();

// Agrega
const pelicula1 = new Pelicula("El Padrino", "Francis Ford Coppola", "Drama");
const pelicula2 = new Pelicula("Pulp Fiction", "Quentin Tarantino", "Crimen");
coleccionPeliculas.agregarPelicula(pelicula1);
coleccionPeliculas.agregarPelicula(pelicula2);


const musica1 = new Musica("Lost on you", "Lp", "Balada");
const musica2 = new Musica("Easy on me", "Adele", "Balada");
coleccionPeliculas.agregarMusica(musica1);
coleccionPeliculas.agregarMusica(musica2);


const libro1 = new Libro("Cien años de soledad", "Gabriel G. Marquez", "Novela");
const libro2 = new Libro("Los genios", "Jaime Bayly", "Novela");
coleccionPeliculas.agregarLibro(libro1);
coleccionPeliculas.agregarLibro(libro2);




// Listar en consola
coleccionPeliculas.listarPeliculas();

coleccionPeliculas.listarMusicas();

coleccionPeliculas.listarLibros();


// Buscar 
const peliculaEncontrada = coleccionPeliculas.buscarPelicula("El Padrino");
console.log(peliculaEncontrada);


const musicaEncontrada = coleccionPeliculas.buscarMusica("Easy on me");
console.log(musicaEncontrada);


const libroEncontrado = coleccionPeliculas.buscarLibro("Cien años de soledad");
console.log(libroEncontrado);

// Eliminar 
coleccionPeliculas.eliminarPelicula("Pulp Fiction");

coleccionPeliculas.eliminarMusica("Lost on you");

coleccionPeliculas.eliminarLibro("Los genios");

// Listado actualizado
coleccionPeliculas.listarPeliculas();

coleccionPeliculas.listarMusicas();

coleccionPeliculas.listarLibros();








