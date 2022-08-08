import type { DependencyList } from 'react';
import { useRef } from 'react';
import depsAreSame from '../utils/depsAreSame';

// 初始化对象。如果已经初始化过了，并且依赖没有变化，直接 return
export default function useCreation<T>(factory: () => T, deps: DependencyList) {
  const { current } = useRef({
    deps,
    obj: undefined as undefined | T,
    initialized: false,
  });
  if (current.initialized === false || !depsAreSame(current.deps, deps)) {
    current.deps = deps;
    current.obj = factory();
    current.initialized = true;
  }
  return current.obj as T;
}
