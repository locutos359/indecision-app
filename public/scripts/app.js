'use strict';

console.log('App.js is running');

// Simple object
var app = {
    title: 'Indecision App',
    subtitle: 'This is going to be cool...someday',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var newOption = e.target.elements.option.value;

    if (newOption) {
        app.options.push(newOption);
        e.target.elements.option.value = '';
        console.log(app.options);
        renderIndecisionApp();
    }
};

var removeAllOptions = function removeAllOptions() {
    app.options = [];
    renderIndecisionApp();
};

// JSX - JavaScript XML
// Note the use of braces to use JS code

var renderIndecisionApp = function renderIndecisionApp() {
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
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAllOptions },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderIndecisionApp();
