import MovieListItem from "./MovieListItem";

export default function MovieList(props){

    return (
        <div>
            <h1>{props.title}</h1>

            <ul>
                <MovieListItem movie={props.movies[0]} />
                <MovieListItem movie={props.movies[1]} />
                <MovieListItem movie={props.movies[2]} />
                <MovieListItem movie={props.movies[3]} />
            </ul>
        </div>
    );
}