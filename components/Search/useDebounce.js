import { useState, useEffect } from 'react';

//                          rick    2000
export function useDebounce(value, delay) {
  // value = rick                                      // rick
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the timeout if the component unmounts or if value/delay changes
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
