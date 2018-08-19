# &#128221; Memo – Task List PWA

## &#129335; What is this all about?

This repo containts a simple app that enables you to add tasks to a list. It mainly serves the purpos of teaching myself how to build an React application and making it available as a progressive web app.

I try to keep the used packages as simple as possible as I want to understand how things work without using unnecessary amounts of npm packages.

Also I'll document everything as good as possible and comment on the code.

### Used technologies (so far)
- React
- create-react-app
- Typescript
- styled-components


## &#128640; Get it running

### 1. Clone repository
via ssh: `git clone git@github.com:markusoelhafen/todo-app-pwa.git`

### 2. Add dependecies:
`yarn install`

### 3. Start Application:
`yarn start`

### 4. Start Component Library (optional):
`yarn watch:components`

## &#128197; What happened so far

#### Latest Update – Aug 18, 18
- Improved resonsive styling of the components
- Added timestamp to the data object as a temporary uuid replacement, as with the arr.length used as a key on the datarow it created conflicts when one element was deleted and a new one (then with a duplicate key) was added. Resulting in the app to crash
- Used the worst commit messages one could imagine, need to improve on that (and be strict)

## &#127937; Planned next steps

- [ ] Might need to clear up space, I have the feeling styling shouldn't happen in there
- [ ] Add real uuid to created todos
- [ ] Delete ToDo based on uuid
- [ ] Store ToDos somewhere (mobx, redux, local storage, others?)
- [ ] Better validation what has been entered (eg. not only spaces)

## &#127937; Next milestones
- [ ] Persist data on local machine
- [ ] Make app available offline (pwa)

---

## Done
- [x] Validate what has been entered (eg. no empty values)
