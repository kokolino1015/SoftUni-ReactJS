import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useCreateGame } from "../../hooks/useGames";

const intialValues ={
    title: '',
    category: '',
    maxLevel: '',
    imageUrl: '',
    summary: ''
};

export default function GameCreate() {
    const navigate = useNavigate();
    const createGame = useCreateGame();

    const createHandler = async(values)=>{
        try{
            const {_id: gameId} =  await createGame(values);
            navigate(`/games/${gameId}/details`)
        }catch(err){
            console.log(err.message)
        }
        
    }
    const {values, submitHandler, changeHandler

    } =  useForm(intialValues, createHandler)
    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={submitHandler}>
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" value={values.title} onChange={changeHandler} id="title" name="title" placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" value={values.category} onChange={changeHandler} id="category" name="category" placeholder="Enter game category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" value={values.maxLevel} onChange={changeHandler} id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" value={values.imageUrl} onChange={changeHandler}id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea value={values.summary} onChange={changeHandler} name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    );
}