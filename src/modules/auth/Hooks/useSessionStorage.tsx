import { useState, useEffect } from "react";

export default function useSessionStorage(key:string, initialValue: string) {
  const [val, setVal] = useState(() => {
    const storedValue = sessionStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(val));
  }, [val, key]);

  return [val, setVal];
}
