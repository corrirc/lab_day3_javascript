

const Cinema = function (films) {
  this.films = films;

};

Cinema.prototype.retrieveFilms = function(){
 return this.films.map((film) => {
   return film.title;
 })
};

Cinema.prototype.findFilmTitle = function(title){
  const result = this.films.filter((film) => {
    return film.title === title;
  })
  return result
};

Cinema.prototype.findFilmGenre = function(genre){
  const result = this.films.filter((film) => {
    return film.genre === genre;
  })
  return result
};

Cinema.prototype.findByYear = function(year){
  const result = this.films.filter((film) => {
    return film.year === year;
  })
  return this.films.some(result);
};



module.exports = Cinema;
