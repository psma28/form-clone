# Installing dependencies

To install the dependencies for the project to start up simply run the following command.

```powershell
npm install
```

This will download the needed dependencies as the <mark style="color:green;">**package.json**</mark> file specifies. The principal dependencies are specified below.

```json
{
  ...
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.0",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "eslint": "^9.9.0",
    "eslint-plugin-react": "^7.35.0",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.9",
    "globals": "^15.9.0",
    "vite": "^5.4.1"
  }
}

```

The scripts to run the project are specified into this file too:

```json
{
    ...
    "scripts": {
        "dev": "vite",
        "dev-shared": "vite --host",
        "build": "vite build",
        "lint": "eslint .",
        "preview": "vite preview"
      },
    ...
}
```

So you can start the project up using:

```
npm run dev
//or
npm run dev-shared
```
