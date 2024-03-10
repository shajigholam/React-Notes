import { useState, useEffect } from "react";
import BlogList from "./BlogList";

//sfc shortcut to create stateless functional component
const Home = () => {
    // let name = 'samaneh';
    //**** useState hook:
    // when we need a reactive value(sth that might change at some point)we use the useState hook:
    const [name, setName] = useState('samaneh'); //this is a state
    const[age, setAge] = useState(30);

    const handleClick = () => {
        setName('mike');
        setAge(35);
    }
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'samaneh', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'sisi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'samaneh', id: 3 }
    ])

    //useEffect hook: it runs a function for every render of the component(whenever the page loads initialy or changing the data)
    // useEffect dependancies: when we don't need to run the use effect every time we render the page, so we can use dependecy array and pass it as an argument in useEffect hook
    //e.g if we pass an empty dependency array, it only runs the first initial render
    //add name as a dependency, so whenever name changes, useEffect will run
    useEffect(() => {
        console.log('use effect ran');
    }, [name]);
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
            {/* use props: props are a way to pass data from one component(parent component) into a child component(e.g. here from home component to bloglist component) */}
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            {/* to filter the data we send to another component, use filter method */}
            <BlogList blogs={blogs.filter((blog) => blog.author === 'samaneh')} title="Samaneh's Blogs!" />
            <button onClick={() => setName('rey')}>change name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;