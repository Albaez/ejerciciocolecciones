class ColeccionPeliculas {
  constructor() {
    this.peliculas = [];
    this.musicas = [];
    this.libros = [];
  }

  agregarPelicula(pelicula) {
    this.peliculas.push(pelicula);
  }

  agregarMusica(musica) {
    this.musicas.push(musica);
  }

  agregarLibro(libro) {
    this.libros.push(libro);
  }

  eliminarPelicula(titulo) {
    this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo !== titulo);
  }

  eliminarMusica(titulo) {
    this.musicas = this.musicas.filter(musica => musica.titulo !== titulo);
  }

  eliminarLibro(titulo) {
    this.libros = this.libros.filter(libro => libro.titulo !== titulo);
  }

  buscarPelicula(titulo) {
    return this.peliculas.find(pelicula => pelicula.titulo === titulo);
  }

  buscarMusica(titulo) {
    return this.musicas.find(musica => musica.titulo === titulo);
  }

  buscarLibro(titulo) {
    return this.libros.find(libro => libro.titulo === titulo);
  }

  listarPeliculas() {
    this.peliculas.forEach(pelicula => {
      console.log(`Título: ${pelicula.titulo}, Director: ${pelicula.director}, Género: ${pelicula.genero}`);
    });
  }
  
  listarMusicas() {
    this.musicas.forEach(musica => {
      console.log(`Título: ${musica.titulo}, Artista: ${musica.artista}, Género: ${musica.genero}`);
    });
  }
  
  listarLibros() {
    this.libros.forEach(libro => {
      console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}, Género: ${libro.genero}`);
    });
  }
}

export default ColeccionPeliculas;