import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useGetAllComments, useCreateComment } from "../../hooks/useComments";
import { useGetOneGames } from "../../hooks/useGames";
import gamesAPI from "../../api/games-api";

const initialValues = {
    comment: ''
}

export default function GameDetails() {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [comments, dispatch] = useGetAllComments(gameId);
    const createComment = useCreateComment();
    const {email , userId} = useContext(AuthContext);
    const [game, setGame] = useGetOneGames(gameId)
    const { isAuthenticated } = useContext(AuthContext);
    const { values, changeHandler, submitHandler
    } = useForm(initialValues, async({ comment }) => {

        try{
            const newComment = await createComment(gameId, comment);
            dispatch({type:"ADD_COMMENT", payload: {...newComment, author:{email}}})
        }catch (err){
            console.log(err.message)
        }
    })

    const isOwner = userId === game._ownerId;

    const gameDeleteHandler = async()=>{
        try{
            const isConfirmed = confirm('Are you sure');
            if(isConfirmed){
                await gamemovsAPI.remove(gameId);
                navigate('/');
            }
        }catch(err){
            console.log(err.message);
        }
        
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
                        {comments.map(comment => (
                            <li key={comment._id} className="comment">
                                <p>{comment.author.email}: {comment.text}</p>
                            </li>))
                        }
                        {comments.length === 0 && <p className="no-comment">No comments.</p>}
                        {/* <!-- list all comments htmlFo current game (If any) --> */}

                    </ul>
                    {/* <!-- Display paragraph: If there are no games in the database --> */}

                </div>

                {/* <!-- Edit/Delete buttons ( Only htmlFo creator of this game )  --> */}
                {isOwner && <div className="buttons">
                    <Link to={`/games/${gameId}/edit`} className="button">Edit</Link>
                    <a href="#" onClick={gameDeleteHandler} className="button">Delete</a>
                </div>}
            </div>

            {/* <!-- Bonus -->
    <!-- Add Comment ( Only htmlFo logged-in users, which is not creators of the current game ) */}
            {isAuthenticated
                && <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={submitHandler}>
                        <textarea
                            name="comment"
                            placeholder="Comment......"
                            value={values.comment}
                            onChange={changeHandler}>
                        </textarea>
                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>
            }


        </section>
    );
}