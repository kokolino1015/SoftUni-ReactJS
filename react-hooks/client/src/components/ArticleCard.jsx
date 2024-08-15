import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ArticleCard({_id, title}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F775731.jpg&f=1&nofb=1&ipt=7d4d4beb04d660897595a94da01f68f3584a9e4bf7f82baf8aeeea8bb6a28714&ipo=images" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button as={Link} to={`articles/${_id}/details`} variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;