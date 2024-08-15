import Form from 'react-bootstrap/Form';
import { useForm } from '../hooks/useForm';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function ArticleCreate() {
    const navigate = useNavigate();
    const formSubmitHandler = (values) => {
        (async () => {
            const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/details',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values)
                });
            const result = await response.json();
            navigate(`/articles/${result._id}/details`);
        })();
    }
    const { values, changeHandler, submitHandler } = useForm({
        title: '',
        content: '',
    },formSubmitHandler);

    return (
        <div>
            <Form style={{ margin: 'auto', width: "500px" }} onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        name="title"
                        value={values.title || ''}
                        onChange={changeHandler}
                        type="text"
                        placeholder="Article name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control
                        name="content"
                        value={values.content}
                        onChange={changeHandler}
                        as="textarea"
                        placeholder='Once upon a time...'
                        rows={3} />
                </Form.Group>
                <Form.Group>
                    <Button type="submit" variant="success">Submit</Button>
                </Form.Group>

            </Form>
        </div>
    );
}
