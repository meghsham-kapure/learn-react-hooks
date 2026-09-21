# React Hooks Interview Questions

## Basics & Types

1. What are React Hooks?
2. Why were Hooks introduced in React?
3. What are the different types of Hooks in React?
4. What is the difference between built-in Hooks and custom Hooks?
5. What are the Rules of Hooks?
6. Why can't Hooks be called inside loops or conditions?
7. Why must Hooks be called at the top level of a component?
8. Can Hooks be used inside regular JavaScript functions?
9. What is the difference between a React Hook and a normal function?
10. Can you create your own Hook?

## useState

1. What is `useState()`?
2. How does `useState()` work internally from a component perspective?
3. What does `useState()` return?
4. Why should you use the functional form of state updates?
5. What happens when you call a state setter multiple times in one function?
6. How do you update an object stored in state?
7. How do you update an array stored in state?
8. Why should you not directly mutate state?
9. What is lazy initialization in `useState()`?
10. What happens when the new state value is the same as the current value?

## useEffect

1. What is `useEffect()`?
2. When does `useEffect()` run?
3. What is the purpose of the dependency array?
4. What is the difference between `useEffect(() => {})` and `useEffect(() => {}, [])`?
5. What happens when a dependency in `useEffect()` changes?
6. What is the cleanup function in `useEffect()`?
7. When does the cleanup function execute?
8. How can you use `useEffect()` to fetch API data?
9. What problems can occur when dependencies are missing from `useEffect()`?
10. Why can `useEffect()` sometimes run twice in development?

## useRef

1. What is `useRef()`?
2. What is the difference between `useRef()` and `useState()`?
3. Why doesn't changing `ref.current` cause a re-render?
4. How can `useRef()` be used to access a DOM element?
5. How can `useRef()` be used to store a previous value?
6. What happens to a `useRef()` value when the component re-renders?

## useMemo & useCallback

1. What is `useMemo()`?
2. What is `useCallback()`?
3. What is the difference between `useMemo()` and `useCallback()`?
4. When should you use `useMemo()`?
5. When should you use `useCallback()`?
6. Can `useMemo()` and `useCallback()` improve every React application?
7. How do `useCallback()` and `React.memo()` work together?

## useContext

1. What is `useContext()`?
2. What problem does `useContext()` solve?
3. What happens when a component uses `useContext()` outside its Provider?
4. How is `useContext()` different from passing props?
5. Can a Context Provider contain state created using `useState()`?

## useReducer & Custom Hooks

1. What is `useReducer()` and when would you use it instead of `useState()`?
2. What is a custom Hook, and how would you create one using other Hooks?
