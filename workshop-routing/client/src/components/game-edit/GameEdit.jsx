import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import gamesAPI from "../../api/games-api";
import { useGetOneGames } from "../../hooks/useGames";

const initialValues ={
    title: '',
    category:'',
    maxLevel:'',
    imageUrl:'',
    summary:''
}


export default function GameEdit() {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [game, setGame] = useGetOneGames(gameId);
    const { values, changeHandler, submitHandler
    } = useForm(Object.assign(initialValues, game), async (values) => {
        const isConfirmed = confirm('Are you sure');
        if (isConfirmed) {
            await gamesAPI.update(gameId, values);
            navigate(`/games/${gameId}/details`);
        }
    });
    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={submitHandler}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" value={values.title} onChange={changeHandler} id="title" name="title" />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" value={values.category} onChange={changeHandler} name="category" />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" value={values.maxLevel} onChange={changeHandler} name="maxLevel" min="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" value={values.imageUrl} onChange={changeHandler} name="imageUrl" />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" value={values.summary} onChange={changeHandler} id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    );
}