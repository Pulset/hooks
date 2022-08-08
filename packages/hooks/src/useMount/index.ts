import { useEffect } from 'react';
import { isFunction } from '../utils';

// 对 useEffect 的封装，可以看做是组件挂载之后
const useMount = (fn: () => void) => {
  if (process.env.NODE_ENV === 'development') {
    if (!isFunction(fn)) {
      console.error(
        `useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`,
      );
    }
  }

  useEffect(() => {
    fn?.();
  }, []);
};

export default useMount;
