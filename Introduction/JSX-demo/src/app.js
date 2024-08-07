const rootHTMLElement = document.getElementById('root');

const rootReactElement = ReactDOM.createRoot(rootHTMLElement);

const headingReactSectionElement = (
<header>
    <h1>Hello JSX from React</h1>
    <h2>JSX is awesome</h2>
    <p>lorem</p>
</header>);

function Main(props){
    return React.createElement(
        'main',
        {},
        React.createElement(
            'h3', 
            {}, 
            props.title
        ),
        React.createElement(
            'ul',
            {},
            React.createElement(
                'li',
                {},
                'The Matrix'
            ),
            React.createElement(
                'li',
                {},
                'Man of Steel'
            )
        )
    )
}

const siteContent = React.createElement(
    'div',
    {},
    headingReactSectionElement,
    React.createElement(
        Main, 
        {title:'Best Movies'}
    ),
)

const siteContentJSX = (
    <div>
        {headingReactSectionElement}
        <Main title="Best Movies" />
    </div>
)


rootReactElement.render(siteContent);