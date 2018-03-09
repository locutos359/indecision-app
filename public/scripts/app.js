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

/**
 * @param {string} location
 * @return {string} locationHtml
 */
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var user = {
    name: 'Matt',
    age: 28,
    location: 'Seattle'
};

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        getLocation(user.location)
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
