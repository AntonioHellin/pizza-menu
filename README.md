# Getting Started with React

## COMPONENTS

- React applications are entirely made out of components
- Building blocks of user interfaces in React
- Piece of UI that has its own data, logic and appearance
- We build complex UIs by building multiple components and combining them
- Components can be reused, nested inside each other and pass data between them

## WHAT IS JSX?

- Declarative syntax to describe what components looks like and how they work
- Components must return a block of JSX
- Extension of JavaScript that allows us to embed JavaScript, CSS and React components into HTML
- Each JSX element is converted to a React.createElement function call
- JSX is declarative:
  -> Imperative (javascript):
  - Manual DOM element selections and DOM traversing
  - Step by step DOM mutations until we reach the desired UI
    -> Declarative (React):
  - Describe what UI should look like using JSX, based on current data
  - React is an abstraction away from DOM: we never touch the DOM
  - Instead, we thing of the UI as a reflection of the current data

## PROPS

- Props are used to pass data from parent components to child components (down the component tree)
- Essential tool to configure and customize components (like function parameters)
- With props, parent components control how child components look and work

## GENERAL JSX RULES

- JSX works essentially like HTML, but we can enter "JavaScript mode" by using {}
- We can place JavaScript expressions inside {}
- Statements are not allowed (if/else, for, switch)
- JSX produces a JavaScript expression
- A puece of JSX can only have one root element. If you need more, use <React.Fragment>
