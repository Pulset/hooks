import { useCallback, useState } from 'react';

// update函数，重新render
const useUpdate = () => {
  const [, setState] = useState({});

  return useCallback(() => setState({}), []);
};

export default useUpdate;
