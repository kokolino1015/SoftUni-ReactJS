import Header from "./components/header/Header"
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import GameList from "./components/game-list/GameList";
import GameCreate from "./components/game-create/GameCreate";
import GameDetails from "./components/game-details/GameDetails";
import { AuthContextProvider } from "./contexts/AuthContext";
import Logout from "./components/logout/Logout";
import GameEdit from "./components/game-edit/GameEdit";
import RouteGuard from "./components/common/RouteGuard";

function App() {

    return (
        <AuthContextProvider >
            <div id="box">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />

                        <Route path="/register" element={<Register />} />
                        <Route path="/games" element={<GameList />} />
                        <Route path="/games/:gameId/details" element={<GameDetails />} />

                        <Route element={<RouteGuard />}>
                            <Route path="/games/create" element={<GameCreate />} />
                            <Route path="/games/:gameId/edit" element={<GameEdit />} />
                            <Route path="/logout" element={<Logout />} />
                        </Route>

                    </Routes>
                </main>
            </div>
        </AuthContextProvider>

    )
}

export default App
