console.log('App.js is running');

// Simple object
const app = {
    title: 'Indecision App',
    subtitle: 'This is going to be cool...someday',
    options: [],
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const newOption = e.target.elements.option.value;

    if (newOption) {
        app.options.push(newOption);
        e.target.elements.option.value = '';
        console.log(app.options);
        renderIndecisionApp();
    }
};

const removeAllOptions = () => {
    app.options = [];
    renderIndecisionApp();
}

// JSX - JavaScript XML
// Note the use of braces to use JS code

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAllOptions}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
renderIndecisionApp();