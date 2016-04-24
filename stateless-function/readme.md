# Stateless component

As of React 0.14, you can use stateless components if your
component does not need access to any of the lifecycle events
or using `state`.

I recommend using stateless functions when possible as
they are less code and easy to reason about. They even make
it possible to use outside of React applications.

Read more about them [here](https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d) and [here](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions).


## Serving the example

This example must be loaded via HTTP. The simplest way is using Python's `SimpleHTTPServer`:

```bash
python -m SimpleHTTPServer 8000
```

Now open up your browser to <http://localhost:8000>!

See `first-component/readme.md` for more info.
