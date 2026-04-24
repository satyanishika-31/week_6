# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## delete and get dont hve body requs is accessed through url params
- clint side application and survt side application can interact with each other through http protocal by making http reques and  reserving http res to make thw http request froom alint side application, 1 can use either fetch function or axios module

-the folllowing are the req types
   -GET - TO READ ALL RESORCES
   -POST - TO CREATE A NEW RESORCE
    -PUT - TO UPDATE A RESORCE
    -DELETE - TO DELETE A RESORCE
    -PATCH - TO UPDATE A PART OF RESORCE(parcial update)
- the post ,put and pach request types cann have body properity wich can hold json data where as get and delete requests do not have body properity and the data  can be sent through url 

# state  managment
-sharing state + keeping state sync across app
       
        context API --> small apps
        redux --> large apps
        zustand --> small to medium apps


        --- create context object
        --= add state to context object
        --- set up provider component
        

## issuess with context API
- context with use statr hook is a best and simple state managment mechanism for small applications but it creates unnnessary rerendering issus when multiple state is part of a context to overcome this unnessary rerendring issu create multiple context and make shoure each context have single state 
-  when the application size is huge then maintance of multiple context will become an issue for such large applications advanced state managment tools like redux and zustand are used
