function Tweet(props) {
    return (
        <div className="tweet">
            <h2>{props.username} (@{props.name})</h2>
            <p>{props.message}</p>
            <h3>{props.date}</h3>
        </div>
    );
}

function App() {
    return (
        <div>
            <Tweet username="Tweeter123" name="John Smith" date="Dec 02, 2022" message="This is my first tweet!" />
            <Tweet username="Testaccount45" name="Alexio Cao" date="Jan 29, 2024" message="Whats the deal with airline food?" />
            <Tweet username="footb4ller444" name="Markus schreader" date="Oct 13, 2023" message="React tester" />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));