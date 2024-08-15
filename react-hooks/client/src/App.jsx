import ArticleList from './components/ArticleList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import Article from './components/Article';
import ArticleCreate from './components/ArticleCreate';
import Header from './components/Header';
function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<ArticleList />} />
                <Route path='/articles/:articleId/details' element={<Article />} />
                <Route path='/articles/create' element={<ArticleCreate />} />
            </Routes>
        </>
    )
}

export default App
