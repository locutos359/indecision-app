'use strict';

console.log('App.js is running');

// Simple object
var app = {
    title: 'Indecision App',
    subtitle: 'This is going to be cool...someday',
    options: ['One', 'Two']
};

// JSX - JavaScript XML
// Note the use of braces to use JS code
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? 'Here are your options' : 'No options'
    )
);

var count = 0;
var increment = function increment() {
    count++;
    renderCounterApp();
};

var decrement = function decrement() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: increment },
            '+1'
        ),
        React.createElement('br', null),
        React.createElement(
            'button',
            { onClick: decrement },
            '-1'
        ),
        React.createElement('br', null),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
