# React + Vite

# Knowledge Cafe

Knowledge Cafe is a dynamic React-based website where users can explore a variety of blog posts on diverse topics. The platform offers a streamlined interface for adding blogs to a reading list, designed with a focus on simplicity and user experience.

## Challenges

- State Management: Handling the blog posts to the reading list while maintaining a smooth user experience across different components.
- Component Reusability: Designing reusable components for blog cards, and the reading list to promote clean and maintainable code.
- Component Complexity: Parent to Child Communication- Managing the flow of data between parent and child components posed a significant challenge. Passing data such as blog post details and state from the parent component to various child components required careful use of props.

## Tech Stack

React, TailwindCSS, Daisy UI

## Running Tests

To run tests, run the following command

```bash
  npm run dev
```

## Screenshots

![App Screenshot](https://i.postimg.cc/qB6ZxP9C/Knowledge-Cafe.png)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
