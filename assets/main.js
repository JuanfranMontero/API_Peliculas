window.onload = () => {

    const apiKey = '1cc17c9ae3042dcded67807cd410be6f'
    const showAllMovies = async () => {
        try {
            const reply = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=1cc17c9ae3042dcded67807cd410be6f')
            console.log(reply);
            if(reply.status === 200){
                const dataMovies = await reply.json()
                
                dataMovies.results.forEach(movie => {
                    let article = document.createElement('article')
                    let imgMovie = document.createElement('img')
                    imgMovie.src = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                    let titleMovie = document.createElement('h3')
                    let nodeText = document.createTextNode(movie.title)
                    titleMovie.appendChild(nodeText)
                    article.appendChild(imgMovie)
                    article.appendChild(titleMovie)
                    article.className = 'peliculas'
                    document.getElementById('containerMovies').appendChild(article)
                })
                
            }
        } 
        catch (error) {
            console.log(error);
        }
    }
    showAllMovies()

}
