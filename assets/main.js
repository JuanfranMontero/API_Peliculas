window.onload = () => {

    let page = 1
    const btnAnterior = document.querySelectorAll('button')[0]
    const btnSiguiente = document.querySelectorAll('button')[1]

    btnAnterior.addEventListener('click', () => {
        if(page > 1){
            page -= 1;
            showAllMovies()
        } 
    });

    btnSiguiente.addEventListener('click', () => {
        if(page < 1000){
            page += 1;
            showAllMovies()
        } 
    });

    const showAllMovies = async () => {
        document.getElementById('page').textContent = page
        try {
            const reply = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1cc17c9ae3042dcded67807cd410be6f&page=${page}`)
            console.log(reply);
            if(reply.status === 200){
                const dataMovies = await reply.json()
                let movies = ''
                dataMovies.results.forEach(movie => {
                    movies += `
                            <article class='peliculas'>
                                <img src="https://image.tmdb.org/t/p/w200/${movie.poster_path}"/>
                                <h3>${movie.title}</h3>
                            </article>
                            `
                    
                })
                document.getElementById('containerMovies').innerHTML = movies
            }
        } 
        catch (error) {
            console.log(error);
        }
    }
    showAllMovies()

}
