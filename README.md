# ✏️ Memo – Task List PWA
Disclaimer: The app is no PWA yet ;)

## 🤷‍♀️ What is this all about?

This repo containts a simple app that enables you to add tasks to a list. It mainly serves the purpos of teaching myself how to build an React application and making it available as a progressive web app.

I try to keep the used packages as simple as possible as I want to understand how things work without using unnecessary amounts of npm packages.

Also I'll document everything as good as possible and comment on the code.

### Used technologies (so far)
- React
- create-react-app
- Typescript
- styled-components
- docz

## 🚀 Get it running

### 1. Clone repository
via ssh: 
```
git clone git@github.com:markusoelhafen/todo-app-pwa.git
cd todo-app-pwa
```

### 2. Add dependecies:
`yarn install`

### 3. Start Application:
`yarn start`

### 4. Start Component Library (optional):
`yarn watch:components`

## 📆 What happened so far

#### Latest Update - Aug 23, 2018
- After a code review with @marionebl (thx!):
  - Optimized how the state is handled within `this.setState()`, as I haven't passed the full object to the state. 
  - Changed the input and listening to `onKeypress`: The input is now wrapped in a tasklistinput that uses `<form>` so I can listen to `onSubmit`, which should better work an all devices. (Enter Key is not available on all devices)
  - Cleaned up unneeded component and renamed them.
  - Removed all styling from App (besides styled-components `injectGlobal`) and Containers.

#### Aug 18, 2018
- Improved resonsive styling of the components
- Added timestamp to the data object as a temporary uuid replacement, as with the arr.length used as a key on the datarow it created conflicts when one element was deleted and a new one (then with a duplicate key) was added. Resulting in the app to crash
- Used the worst commit messages one could imagine, need to improve on that (and be strict)

## 🏁 Planned next steps

- [ ] Decide on a immutable state handler (MobX, Immer)
- [ ] Model the state
  - Tips from @marionebl:
    - Create a main state, that connects to the App
    - Create a store for the tasklist
    - Create a store for each task
    - Don't delete tasks, rather set a flag that sets it to 'done'
    - Inject the store on lowest container level
- [ ] Implement prettier
- [ ] Change `any` typings to real typings
- [ ] Add real uuid to created todos
- [ ] Delete ToDo based on uuid
- [ ] Store ToDos somewhere (mobx, redux, local storage, others?)
- [ ] Better validation what has been entered (eg. not only spaces)

## 🏁 Next milestones
- [ ] Persist data on local machine
- [ ] Sync app in database (firebase?)
- [ ] Make app available offline (pwa)

---

## ✅ Done
- [x] Might need to clean up App.tsx, I have the feeling styling shouldn't happen in there
- [x] Listen on Submit when adding a task
- [x] Validate what has been entered (eg. no empty values)
