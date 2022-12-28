import { useState, useCallback } from "react";

// React.ChangeEvent<HTMLInputElement>
// 아래
// https://velog.io/@ahn0min/TypeSCript-event-%EC%9D%98-type-%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C

const useInput = (initialData: any) => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
