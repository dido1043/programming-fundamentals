function movies(arr) {
    let list = [];
    for (let lines of arr) {
        if (lines.includes("addMovie")) {
            let nameOfMovie = lines.split("addMovie ")[1];
            list.push({ name: nameOfMovie });
        } else if (lines.includes("directedBy")) {
            let info = lines.split(" directedBy ");
            let nameOfFilm = info[0];
            let director = info[1];

            let movie = list.find((movieObj) => movieObj.name === nameOfFilm);
            if (movie) {
                movie.director = director;
            }
        } else if (lines.includes("onDate")) {
            let info = lines.split(" onDate ");
            let nameOfFilm = info[0];
            let date = info[1];

            let movie = list.find((movieObj) => movieObj.name === nameOfFilm)
            if (movie) {
                movie.date = date;
            }
        }
    }
    for (let movie of list) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}
movies(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen'
]);