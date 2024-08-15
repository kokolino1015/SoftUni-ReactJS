import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

export default function ArticleDetails() {
    const [article , setArticle] = useState({});
    const {articleId} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${articleId}`)
            .then(response => {
                if (response.statusText == 'No Content') {
                    // redirect
                    navigate('/not-found');
                    return;
                }

                return response.json();
            })
            .then(result => setArticle(result));
    }, []);

  return (
    <div className="p-20 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Article</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{article.title}</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                {article.content}
              </p>
            </div>
  )
}
