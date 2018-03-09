console.log('App.js is running');

// JSX - JavaScript XML
const app = {
    title: 'IndecisionApp',
    subtitle: 'This is going to be cool...someday',
};

const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
