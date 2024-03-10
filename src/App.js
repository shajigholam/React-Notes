import Home from './Home';
//components and templates
function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  // const person = { name: 'yoshi', age: 30 };
  const link = 'http://www.google.com';

  const handleClickAgain = (name) => {
    console.log(`hello ${name}`);
  }

  return (
    <div className="App">
      <div className="content">
        <Home />
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>

        {/* <p>{ person }</p> */}

        <p>{ 10 }</p>
        <p>{ "hello, Samaneh" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={link}>Google Site</a>

        {/* inline stylying */}
        <a href="/create" style={{
          color: "white",
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>New Blog</a>

        {/*when we want to send an argument, we can use ()right away, coz it will call the func immediately, instead wrap it around an anonymous function */}
        <button onClick= {() => {
          handleClickAgain('samaneh');
        }}>Click me again</button>
        
      </div>
    </div>
  );
}

export default App;

/*
run -> npx create-react-app dojo-blog in a directory where you want to create your React app
React is a js library - SPA(single page application) so it is faster than JS
a component is a function, and we must return sth inside that function. generally it is a jsx template(in the back will tranform to html)
we need to expp\ort it to be able to use it in other files
we can output dynamic values or variables inside jsx
*/