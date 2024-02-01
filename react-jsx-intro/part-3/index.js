function Person(props) {
    let nameDisplay = props.name.length > 8 ? props.name.substring(0, 6) : props.name;
    return (
        <div>
            <p>Learn some information about this person</p>
            <h2>{nameDisplay}</h2>
            <h3>{props.age >= 18 ? "please go vote!" : "you must be 18"}</h3>
            <ul>
                {props.hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </div>
    );
}

function App() {
    return (
        <div>
            <Person name="Elizabeth" age={30} hobbies={["Writing", "Gardening", "Eating"]} />
            <Person name="Jonathan" age={17} hobbies={["Flying", "Gaming"]} />
            <Person name="Alexander" age={25} hobbies={["Lifting", "Modeling"]} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
