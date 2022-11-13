# React-Cryptoicon

## React Typescript

```jsx
import { BtcIcon } from '@shinragriever/react-cryptoicon';

const Icon = () => {
  return (
    <>
      <BtcIcon height="32x" width="32px" />
    </>
  );
};

export default Icon;
```

```tsx
import { BtcIcon } from '@shinragriever/react-cryptoicon';

type IProps = {
  props?: SVGProps<SVGSVGElement>;
};

const Icon = ({ props = {} }: IProps) => {
  return (
    <>
      <BtcIcon {...props} />
    </>
  );
};

export default Icon;
```
