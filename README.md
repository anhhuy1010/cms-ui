
## Getting Started

First, run the development server:

```bash
npm run start
# or
yarn start
```

## Project Structure

Here's the overall structure of the application

```
src/
├── assets/
├── config/
├── hooks/
├── layout/
├── shared/
├── storage/
└── types/

```
### features
Separated folder for each feature module.  Use Kebab Case for naming features subfolders
    ```
    ├── features/
    │   ├── module-folder/
    │   │   ├── components
    │   │   ├── storage
    │   │   ├── views
    │   │   ├── services
    │   │   ├── index.tsx
    ```
#### components
Separated folder for each components directory. Use Pascal Case for naming components subfolders
        ```
        ├── components/
        │   ├── ComponentFolder/ 
        │   │   ├── components
        │   │   ├── elements
        │   │   ├── layouts
        ```
#### views
Same as components directory.

Pascal Case: every word starts with an uppercase letter.
Snake Case: separates each word with an underscore character (_). When using snake case, all letters need to be lowercase.
Kebab Case: very similar to snake case.separates each word with a dash character, -, instead of an underscore.
