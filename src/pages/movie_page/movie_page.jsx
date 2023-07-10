
const API_IMG="https://image.tmdb.org/t/p/w500/";

const MoviePage =({titel, poster_path , vote_average, release_date, overview})=>{
    return(
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
              <img className="card-img-top" src={API_IMG+poster_path } alt="" />
              <div className="card-body">
                      <h3>{titel}</h3>
                      <h4>IMDb: {vote_average}</h4>
                      <h5>Release Date: {release_date}</h5>
                      <br></br>
                      <h6>Overview</h6>
                      <p>{overview}</p>
              </div>
            </div>
        </div>
    )
}

export default MoviePage;