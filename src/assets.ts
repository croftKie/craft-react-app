export const redux_files = [
  {
    name: "App.jsx",
    path: "/src",
    content: `import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from './redux/counterSlice';
import './css/App.css';

export default function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
<>
  <div className="row">
<button
  className='button'
  aria-label="Decrement value"
  onClick={() => dispatch(decrement())}
>
  -
</button>
<span className="value">{count}</span>
<button
  className="button"
  aria-label="Increment value"
  onClick={() => dispatch(increment())}
>
  +
</button>
  </div>
  <div className="row">
<input
  className="textbox"
  aria-label="Set increment amount"
  value={incrementAmount}
  onChange={(e) => setIncrementAmount(e.target.value)}
/>
<button
  className="button"
  onClick={() => dispatch(incrementByAmount(incrementValue))}
>
  Add Amount
</button>
  </div>
</>
  );
}`,
  },
  {
    name: "Main.jsx",
    path: "/src",
    content: `import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import App from './App.jsx'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Provider store={store}>
  <App />
</Provider>
  </React.StrictMode>,
)`,
  },
  {
    name: "store.js",
    path: "/src/redux",
    content: `import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
counter: counterReducer,
  },
});`,
  },
  {
    name: "counterSlice.js",
    path: "/src/redux",
    content: `import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  value: 0,
  status: 'idle',
};
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
increment: (state) => {
  state.value += 1;
},
decrement: (state) => {
  state.value -= 1;
},
incrementByAmount: (state, action) => {
  state.value += action.payload;
},
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;`,
  },
];

export const react_files = [
  {
    name: "App.jsx",
    path: "/src",
    content: `import { useState } from 'react'
import './css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
  <h1>Vite + React</h1>
  <div className="card">
<button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button>
<p>
  Edit <code>src/App.jsx</code> and save to test HMR
</p>
  </div>
  <p className="read-the-docs">
Click on the Vite and React logos to learn more
  </p>
</>
)
  }

  export default App`,
  },
  {
    name: "Main.jsx",
    path: "/src",
    content: `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<App />
  </React.StrictMode>,
)`,
  },
];

export const app_files = [
  {
    name: "index.html",
    path: "/",
    content: `<!doctype html>
<html lang="en">
  <head>
<meta charset="UTF-8" />
<link rel="icon" type="image/svg+xml" href="/vite.svg" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Vite + React</title>
  </head>
  <body>
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
  </body>
</html>`,
  },
  {
    name: "vite.config.js",
    path: "/",
    content: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
esbuildOptions: {
  loader: {
'.js': 'jsx',
  },
},
  },
})`,
  },
  {
    name: ".eslintrc.cjs",
    path: "/",
    content: `module.exports = {
root: true,
env: { browser: true, es2020: true },
extends: [
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:react/jsx-runtime',
  'plugin:react-hooks/recommended',
],
ignorePatterns: ['dist', '.eslintrc.cjs'],
parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
settings: { react: { version: '18.2' } },
plugins: ['react-refresh'],
rules: {
  'react-refresh/only-export-components': [
'warn',
{ allowConstantExport: true },
  ],
},
  }`,
  },
  {
    name: ".gitignore",
    path: "/",
    content: `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?`,
  },
  {
    name: "index.css",
    path: "/src/css",
    content: `:root {
font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
line-height: 1.5;
font-weight: 400;
  
color-scheme: light dark;
color: rgba(255, 255, 255, 0.87);
background-color: #242424;
  
font-synthesis: none;
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
-webkit-text-size-adjust: 100%;
  }
  
  a {
font-weight: 500;
color: #646cff;
text-decoration: inherit;
  }
  a:hover {
color: #535bf2;
  }
  
  body {
margin: 0;
display: flex;
place-items: center;
min-width: 320px;
min-height: 100vh;
  }
  
  h1 {
font-size: 3.2em;
line-height: 1.1;
  }
  
  button {
border-radius: 8px;
border: 1px solid transparent;
padding: 0.6em 1.2em;
font-size: 1em;
font-weight: 500;
font-family: inherit;
background-color: #1a1a1a;
cursor: pointer;
transition: border-color 0.25s;
  }
  button:hover {
border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
outline: 4px auto -webkit-focus-ring-color;
  }
  
  @media (prefers-color-scheme: light) {
:root {
  color: #213547;
  background-color: #ffffff;
}
a:hover {
  color: #747bff;
}
button {
  background-color: #f9f9f9;
}
  }`,
  },
  {
    name: "App.css",
    path: "/src/css",
    content: `#root {
max-width: 1280px;
margin: 0 auto;
padding: 2rem;
text-align: center;
  }
  
  .row {
display: flex;
align-items: center;
justify-content: center;
  }
  
  .row > button {
margin-left: 4px;
margin-right: 8px;
  }
  .row:not(:last-child) {
margin-bottom: 16px;
  }
  
  .value {
font-size: 78px;
padding-left: 16px;
padding-right: 16px;
margin-top: 2px;
font-family: 'Courier New', Courier, monospace;
  }
  
  .button {
appearance: none;
background: none;
font-size: 32px;
padding-left: 12px;
padding-right: 12px;
outline: none;
border: 2px solid transparent;
color: rgb(112, 76, 182);
padding-bottom: 4px;
cursor: pointer;
background-color: rgba(112, 76, 182, 0.1);
border-radius: 2px;
transition: all 0.15s;
  }
  
  .textbox {
font-size: 32px;
padding: 2px;
width: 64px;
text-align: center;
margin-right: 4px;
  }
  
  .button:hover,
  .button:focus {
border: 2px solid rgba(112, 76, 182, 0.4);
  }
  
  .button:active {
background-color: rgba(112, 76, 182, 0.2);
  }
  `,
  },
];

export const directories = ["src", "public", "src/assets", "src/css"];

export const text = {
  intro: [
    "Welcome to Craft React App",
    "Follow the instructions to get started",
  ],
  setName: ["React App - ", "Standby for install..."],
  gitHubCheck: ["Cloned GitHub Repo:"],
  ReduxToolkit: ["Added Redux Toolkit"],
  ReactRouter: ["Added React Router"],
  complete: [" 'cd' into your folder and enjoy! "],
};

// export const packages_prod = ["react", "react-dom"];
// export const packages_dev = [
//   "vite",
//   "eslint",
//   "@types/react",
//   "@types/react-dom",
//   "@vitejs/plugin-react",
//   "eslint-plugin-react",
//   "eslint-plugin-react-hooks",
//   "eslint-plugin-react-refresh",
// ];
// export const packages_redux = ["react-redux", "@reduxjs/toolkit"];
// export const packages_router = ["react-router-dom"];

export const packages: {
  prod: string[];
  dev: string[];
  redux: string[];
  router: string[];
} = {
  prod: ["react", "react-dom"],
  dev: [
    "vite@4.5.0",
    "eslint",
    "@types/react",
    "@types/react-dom",
    "@vitejs/plugin-react",
    "eslint-plugin-react",
    "eslint-plugin-react-hooks",
    "eslint-plugin-react-refresh",
  ],
  redux: ["react-redux", "@reduxjs/toolkit"],
  router: ["react-router-dom"],
};
