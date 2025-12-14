import { useEffect, useState } from "react";
import "./index.css";
export function App() {
  const [shmelusi, setShmelusi] = useState<string[]>([]);
  useEffect(() => {
    const interval = setInterval(() => {
      setShmelusi((prev) => [...prev, "Привет всем шмелюсям!!"]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="flex h-screen w-screen">
      <nav className="w-36 bg-black text-white shrink-0"></nav>
      <section className="flex w-full justify-center">
        <div>
          {shmelusi.map((shmelusi) => (
            <div>{shmelusi}</div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
