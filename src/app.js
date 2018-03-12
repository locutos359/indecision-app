console.log('App.js is running');

// Simple object
const app = {
    title: 'Indecision App',
    subtitle: 'This is going to be cool...someday',
    options: ['One', 'Two'],
};

// JSX - JavaScript XML
// Note the use of braces to use JS code
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    </div>
);

let count = 0;
const increment = () => {
    count++;
    renderCounterApp();
}

const decrement = () => {
    count--;
    renderCounterApp();
}

const reset = () => {
    count = 0;
    renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>+1</button>
            <br/>
            <button onClick={decrement}>-1</button>
            <br/>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();