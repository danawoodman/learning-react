# Your First Component

Now that you've seen what React looks like and you've gotten the "Hello World" example out of the way, it's time to write your first component!

This component does basically the same thing as the "Hello World" except that you create your own component using `React.createClass` that you then pass a `prop` down to.

`prop`s are basically like HTML tag attributes (eg `<div class='foo'></div>` where `class` is the tag attribute and `'foo'` is its value). You pass in props as parameters like you do to a function. Ever time that you send a new `prop` to a component, it re-renders. 

However, since React is smart about how it re-renders, it only changes the DOM that is absolutely necessary to change. That way you can just pretend like your whole app re-renders every time data changes, but React figures out how to make this fast for you.

`prop`s are accessible as a value on the component's `this` keyword as an object. Each prop you pass in is stored on the `prop` object based on the key you pass into the component.

You'll notice the `render` method in your component. This is the only required method in a React component and it must return a single JSX tag (or `React.createElement`). In this example, we are just returning a standard `<h1>` tag but you can also use other React components.


## Serving the example

You will need to serve this example using HTTP. You cannot just open the HTML files in a web browser anymore. The easiest way to do this on Linux/OSX is the Python web server:

```bash
python -m SimpleHTTPServer 8000
```

Now open up your browser to <http://localhost:8000>!

As I don't use windows, I can't really help but check out [this article on StackOverflow](http://stackoverflow.com/questions/5050851/best-lightweight-web-server-only-static-content-for-windows).

You can use whatever web serer you want (PHP, Node.js, Ruby, etc), you just need to serve it via HTTP.
