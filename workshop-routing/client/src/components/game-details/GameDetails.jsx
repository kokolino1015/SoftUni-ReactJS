import {  useState } from "react";
import { useParams } from "react-router-dom";

import { useGetOneGames } from "../../hooks/useGames";
import commentsApi from "../../api/comments-api";

export default function GameDetails() {
    const { gameId } = useParams();
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('')
    const [game, setGame] = useGetOneGames(gameId);
    
    const commentSubmitHandler = async (e) => {
        e.preventDefault();
        const newComment = await commentsApi.create(gameId, username, comment)

        setGame(prevState => ({
            ...prevState,
            comments: {
                ...prevState.comments,
                [newComment._id]: newComment,
            }
        }))
        setUsername('')
        setComment('')
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                {/* <!-- Bonus ( htmlFo Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {Object.keys(game.comments || {}).length > 0

                            ? Object.values(game.comments).map(comment => (
                                <li key={comment._id} className="comment">
                                    <p>{comment.username}: {comment.text}</p>
                                </li>))
                            : <p className="no-comment">No comments.</p>
                        }
                        {/* <!-- list all comments htmlFo current game (If any) --> */}

                    </ul>
                    {/* <!-- Display paragraph: If there are no games in the database --> */}

                </div>

                {/* <!-- Edit/Delete buttons ( Only htmlFo creator of this game )  --> */}
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            {/* <!-- Bonus -->
    <!-- Add Comment ( Only htmlFo logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={commentSubmitHandler}>
                    <input type="text" placeholder="Pesho" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <textarea name="comment" placeholder="Comment......" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
}