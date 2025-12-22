import { useEffect, useState } from "react";

export function Shmelusi() {
    const [shmelusi, setShmelusi] = useState<string[]>([]);
    useEffect(() => {
        const interval = setInterval(() => {
            setShmelusi((prev) => [...prev, "Привет всем шмелюсям!!"]);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
          {shmelusi.map((shmelusi) => (
            <div>{shmelusi}</div>
          ))}
        </div>
    )
}