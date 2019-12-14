1. What problem does the context API help solve?

It solves the same problem as redux, managing state so that developers don't have to make a prop drilled mess out of things. It's just easier and cleaner to useContext(), rather than remember where props are coming from. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions creators & actions: Action creators are functions that take in data, perform    logical calculations then output an action object with type and payload properties. Actions don't touch  state directly, so it's possible to perform async operations with action creators and redux-thunk. 

Reducers: Pure functions that take in an initial[or current] state, and actions then return a brand new state without mutating anything. This state could be determined purely by the action's type property, or it could also rely on the payload for additional information. 

Store: An object used to hold iterations of state in the redux paradigm. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state relevant throughout the app and kept stored in a way that's accessible. Ie. with redux/contextAPI. Component state is state only relevant to the component wherein it is stored. It's nice to use application state when other components rely on the information as well, but it's more convenient to use component state when the data doesn't need to traverse through redux. For example, holding an input in local component state then passing it as a parameter to an action. 

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that intercepts action objects before they are dispatched to the reducers in an App. Thunk then checks if what's being passed is an object[an action], or a function[action creator]. If it's an object, it passes to the reducers as usual. However, if it is a function[an action creator], the thunk middleware passes a fake through the redux dispatch synchronous paradigm while passing dispatch into the action creator, making it available for asynchronous use. 

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux, I've been looking forward to learning it for almost a year. 