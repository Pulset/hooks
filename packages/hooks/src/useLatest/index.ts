import { useRef } from 'react';

// 通过 useRef 的特性，保存 value 的最新的值，不会触发 render
function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;

  return ref;
}

export default useLatest;
