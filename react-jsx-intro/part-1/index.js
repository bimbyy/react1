// FirstComponent
function FirstComponent() {
    return <h1>My very first component</h1>;
}

// NamedComponent
function NamedComponent(props) {
    return <p>My name is {props.name}</p>;
}

// App Component
function App() {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Jared Nygaard" />
        </div>
    );
}

// Render the App component inside the div with id 'root'
ReactDOM.render(<App />, document.getElementById('root'));