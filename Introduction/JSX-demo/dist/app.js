var rootHTMLElement = document.getElementById('root');

var rootReactElement = ReactDOM.createRoot(rootHTMLElement);

var headingReactSectionElement = React.createElement(
    'header',
    null,
    React.createElement(
        'h1',
        null,
        'Hello JSX from React'
    ),
    React.createElement(
        'h2',
        null,
        'JSX is awesome'
    ),
    React.createElement(
        'p',
        null,
        'lorem'
    )
);

function Main(props) {
    return React.createElement('main', {}, React.createElement('h3', {}, props.title), React.createElement('ul', {}, React.createElement('li', {}, 'The Matrix'), React.createElement('li', {}, 'Man of Steel')));
}

var siteContent = React.createElement('div', {}, headingReactSectionElement, React.createElement(Main, { title: 'Best Movies' }));

var siteContentJSX = React.createElement(
    'div',
    null,
    headingReactSectionElement,
    React.createElement(Main, { title: 'Best Movies' })
);

rootReactElement.render(siteContent);