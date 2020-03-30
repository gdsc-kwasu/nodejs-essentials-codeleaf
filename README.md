# nodejs-essentials-codeleaf
Setup a standard Node.js project with essential development tools 
#### Style Guide
A **Style Guide**?
**Style Guide** provides rules of how we write Javascript. It helps a team of developer to be consistent with the code they write. It basically deals with things like how you destructure, declare variable, and many other useful guidelines like that. You can find the **[Airbnb Style Guide Rule Here](https://github.com/airbnb/javascript)**, read it (not everything), and as you try and write code with it, you get familiar with it.

#### Linting
We quickly wanna catch and detect error while writing our code, and given the Style Guide you'd be following, you'd need something to quickly tell you that you are violating a rule in the guide. **ESLint** is the best and the standard linting tool out there. So, integrate **ESLint**. And of course, ensure you setup an **NPM script** to format your code.

#### Prettier
Use prettier to have code formatting according to the style guide. And ensure that you have the right and complete configuration for your prettier. You can use the [Prettier Playground](https://prettier.io/playground/) to experiment and generate your config options. 

> **NOTE**: All of this three things I have mentioned above works and integrate nicely with one another. Make sure one is not hindering the other. And in your project, you will not be writing **React**, so I do not expect you to have the ESLint config of **eslint-config-airbnb**, rather **eslint-config-airbnb-base**. All these tiny things matters.


### What will the Project do?
When you are done setting up the Node.js environment correctly, solve the below kata from code wars.

**[Code War Kata Challenge](https://www.codewars.com/kata/59a9919107157a45220000e1)**
