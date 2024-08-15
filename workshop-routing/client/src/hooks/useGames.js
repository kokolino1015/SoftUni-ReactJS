import { useEffect, useState } from "react"
import gamesAPI from "../api/games-api"


export function useGetAllGames(){
    const [games, setGames] = useState([])

    useEffect(() => {
        gamesAPI.getAll()
            .then(result => setGames(result))
    }, [])
    return [games, setGames]
}
export function useGetOneGames(gameId){
    const [game, setGame] = useState({});
    useEffect(() => {
        (async () => {
            const result = await gamesAPI.getOne(gameId);
            setGame(result);
        })();
    }, [gameId])
    return [
        game, 
        setGame
    ]
}
export function useCreateGame(){
    const gameCreateHandler = async(gameData)=>{
        return await gamesAPI.create(gameData)
    }
    return gameCreateHandler;
}