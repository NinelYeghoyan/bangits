# Bangits

## Stack
* `React`
* `TypeScript`
* `Redux Toolkit RTK Query`
* `React Hook Form`
* `Styled components`

## How to run
    pnpm install
    pnpm start

## Folder structure
    src
        ├── app
        │   ├── hooks
        │   └── ...
        ├── assets
        │   ├── icons
        │   └── ...
        ├── components
        │   ├── {component}
        │   │   │   ├── index.tsx
        │   │   │   ├── styled.ts
        │   │   │   └── ...
        │   │   └── ...
        ├── features
        │   ├── {feature}
        │   │   ├── components
        │   │   │   ├── {component}
        │   │   │   │   ├── index.tsx
        │   │   │   │   ├── styled.ts
        │   │   │   │   └── ...
        │   │   │   └── ...
        │   │   ├── hooks
        │   │   │   ├── use-{hook}.ts
        │   │   │   └── ...  
        │   │   ├── utils
        │   │   │   ├── index.ts
        │   │   │   └── ...  
        │   │   ├── types.ts
        │   │   ├── api.ts
        │   │   ├── endpoints.ts
        │   │   ├── slice.ts
        │   │   └── ...  
        │   └── ...  
        ├── i18n
        │   └── ...
        ├── layout
        │   ├── {component}
        │   │   ├── index.tsx
        │   │   ├── styled.ts
        │   │   └── ...
        │   └── ...
        ├── style
        │   ├── scss  
        │   │   ├── {name}.scss 
        │   │   └── ... 
        │   ├── theme
        │   │   ├── {name}.js 
        │   │   └── ...
        │   └── ...
        ├── types
        │   └── ...
        ├── utils
        │   └── ...
        └── ...

## Code example

```tsx
import { FC, useCallback } from "react";

type ComponentNameProps = {};

const ComponentName: FC<ComponentNameProps> = () => {
    const handleChnage = useCallback(() => {}, []);

    return <tag onChange={handleChnage}>content</tag>;
};

export default ComponentName
```

## Styled components example

```ts
import styled from "styled-components";

export const StyledComponentName = styled.div`
    width: 100px;
    height: 100px;
  
    font-family: ${({ theme }) => theme.typography.fontFamily.roboto}, sans-serif;
    font-size: ${(p) => p.theme.typography.fontSize.p16};
    font-weight: ${(p) => p.theme.typography.weight.normal};
    
    background-color: ${(p) => p.theme.palette.accent};
    color: ${({ theme }) => theme.palette.white};
    padding: 10px;
`;
```