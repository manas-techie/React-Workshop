// This is a simple implementation of a custom React-like rendering function. It takes a React element, which is an object that describes the type of element to create, its props, and its children, and renders it to the DOM.
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}


// This function takes a React element and a container, creates a DOM element based on the type of the React element, sets its inner HTML and attributes based on the props, and appends it to the container.
function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;   
    domElement.setAttribute('href', reactElement.props.href);       
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
    */
   
    // A more dynamic way to handle props and children, which can be either a string or an array of React elements.
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    
    for (const prop in reactElement.props) {
        if(prop !== 'children') {
            domElement.setAttribute(prop, reactElement.props[prop]);
        }
    }

    container.appendChild(domElement);
}

// This is the main container where we want to render our React element. In a real application, this would typically be a div with an id of 'root' in your HTML file.  
const mainContainer = document.getElementById('root');

// This method add the element to the container and render it on the page
customRender(reactElement, mainContainer);