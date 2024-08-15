
import styles from '../App.module.css';
import ArticleCard from './ArticleCard';

import Spinner from 'react-bootstrap/esm/Spinner';
import Button from 'react-bootstrap/Button';
import { useFetch } from '../hooks/useFetch';

export default function ArticleList() {
    const { data: articles, isFetching, refetch } = useFetch('http://localhost:3030/jsonstore/advanced/articles/details', [])

    return (
        <div className={styles["article-list"]}>
            {isFetching
                ? <Spinner />
                : Object.values(articles).map(article => <ArticleCard key={article._id} {...article} />)
            }
            <Button variant="primary" onClick={refetch}>Primary</Button>
        </div>
    );
}