# State and Props

## Overview

Today's class will focus on passing information as `props` from a parent component into a child component. We will also cover the concept of `state` and how individual components can hold state.

## Daily Plan

- Warm-up exercise
- Review code challenges
- Introduction of today's code challenge topic
- Code review of lab assignment
- Code Demo
- Bootstrap
- Lab Preview

## Learning Objectives

As a result of completing Lecture 2 of Code 301, students will:

- Describe and Define:
  - State
  - Props
  - React-Bootstrap
  - Netlify
  - setState
- Understand and define the concepts of `props` and `state` as they relate to React Components
- Be able to pass both static and dynamic information from a parent component into a child component using `props`
- Be able to hold information as `state` in different components
- Be able to utilize Bootstrap to style applications
- Deploy to Netlify

## Notes

1. What is state? 

1. What are props?

1. To Update State: `this.setState({ thingInState: thingToUpdate })`

1. To send something in props to a child component: `<ChildComponent bananas='randomString' />`

1. To access that variable in the props from the child component: `this.props.bananas`

1. Information flows in one direction. That direciton is ______________.

1. What is Bootstrap?

1. What are different things that I can customize using Bootstrap?

1. Holding state in a parent component and sending it into a child component:
  ```javaScript
  import React from 'react';
  import Child from './path-to-Child-component';

  class Parent extends React.Component {
    constructor(props);
    this.state={
      name: 'sue',
      childName: 'bob'
    }

    render() {
      return (
        <>
          <p>My name is {this.state.name}</p>
          <Child kidsName={this.state.childName}>
        </>
      )
    }
  }

  export default Parent
  
  import React from 'react';

  class Child extends React.Component {
    render() {
      return(
        <p>My name is {this.props.kidsName}</p>
      )
    }
  }

  export default Child
  ```
  