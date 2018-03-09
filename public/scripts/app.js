'use strict';

console.log('App.js is running');

// JSX - JavaScript XML
var app = {
    title: 'IndecisionApp',
    subtitle: 'This is going to be cool...someday'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
