const addMoviesToDom = function (allMovies) {
  document.getElementById("movie-list").innerHTML = "";
  const ul = document.getElementById("movie-list");
  allMovies.map((movie) => {
    const newLi = document.createElement("li");
    const newImg = document.createElement("img");
    const newA = document.createElement("a");
    newImg.setAttribute("src", movie.poster);
    newA.setAttribute(
      "href",
      "https://www.imdb.com/title/" + movie.imdbID + "/"
    );
    ul.appendChild(newLi);
    newLi.appendChild(newA);
    newA.appendChild(newImg);
  });
};

addMoviesToDom(movies);

const addEventListeners = function () {
  const filterButtons = Array.from(document.getElementsByName("filter"));
  filterButtons.forEach((element) => {
    element.addEventListener("change", function (event) {
      switch (event.target.value) {
        case "new":
          filterLatestMovies();
          break;
        case "avenger":
          filterMovies("Avengers");
          break;
        case "xmen":
          filterMovies("X-Men");
          break;
        case "princess":
          filterMovies("Princess");
          break;
        case "batman":
          filterMovies("Batman");
          break;
      }
    });
  });
};

addEventListeners();

const filterMovies = function (wordInMovie) {
  const filteredMovies = movies.filter((movie) =>
    movie.title.includes(wordInMovie)
  );
  addMoviesToDom(filteredMovies);
};

const filterLatestMovies = function () {
  const latestMovies = movies.filter((movie) => movie.year >= 2014);
  addMoviesToDom(latestMovies);
};

const searchbar = document.getElementById("searchbar");

searchbar.addEventListener("keyup", function () {
  filterMovies(searchbar.value);
});
