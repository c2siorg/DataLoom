# DataLoom
Project is to design and implement a web-based GUI for data wrangling, aimed at simplifying the process of managing and transforming tabular datasets. This application will serve as a graphical interface for the powerful Python library, allowing users to perform complex data manipulation tasks without the need for in-depth programming knowledge. 

### Apps and Packages

- `frontend`: a React.js app
- `Docs`: React.js app for tutorials regarding DataLoom
- `backend`:  Python(FastAPI) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo


### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting


### Run Application
**Set Up Environment Variables** :
Create a `.env` file in the `apps/backend` directory and add details as per `.env.sample` file.

**Dependency Issues**: Ensure all required dependencies are installed by running `pip install -r requirements.txt` in apps/backend

To run all apps and packages, run the following command:
```
cd DataLoom
npm run dev
```

The backend server will start and be accessible at `http://127.0.0.1:8000`.
