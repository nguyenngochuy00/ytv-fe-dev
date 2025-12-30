// Hook hạ tầng dùng cho các ô tìm kiếm, giúp trì hoãn việc gọi API cho đến khi người dùng ngừng gõ, tiết kiệm tài nguyên hệ thống.
import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
