console.log("JS working...!");

// Get root html document
const rootHtmlElement = document.getElementById('root');

// Initialize root react element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// Create basic react element

const headingReactElement = React.createElement('h1', null, 'Hello JSX from React')


rootReactElement.render(headingReactElement);