import requester from './requester'

const BASE_URL = 'http://localhost:3030/data/games'
export const getAll = async () => {

    const result = await requester.get(BASE_URL)
    const games = Object.values(result);
    return games

}

export const getLatest = async () => {
    const urlSearchParams = new URLSearchParams({
        sortBy: `_createdOn desc`,
        pageSize: 3,
    })
    console.log(`${BASE_URL}?${urlSearchParams.toString()}`)
    const result = await requester.get(`${BASE_URL}?${urlSearchParams.toString()}`)
    console.log(result)
    const latestGames = Object.values(result)
    console.log(latestGames)
    return latestGames;
}

export const getOne = (gameId) => requester.get(`${BASE_URL}/${gameId}`)

export const create = (gameData) => requester.post(`${BASE_URL}`, gameData);

export const remove = (gameId) => requester.del(`${BASE_URL}/${gameId}`);

export const update = (gameId, gameData) => requester.put(`${BASE_URL}/${gameId}`, gameData)

const gamesAPI = {
    getAll,
    getOne,
    create,
    remove,
    update,
    getLatest
}
export default gamesAPI