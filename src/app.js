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

/**
 * @param {string} location
 * @return {string} locationHtml
 */
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

const user = {
    name: 'Matt',
    age: 28,
    location: 'Seattle',
};

const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        <p>{getLocation(user.location)}</p>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
