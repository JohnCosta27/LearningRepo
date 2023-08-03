import { useEffect, useState } from "react";

export const App = () => {
  const [s, setS] = useState("From server");

  useEffect(() => {
    setTimeout(() => {
      setS("From bruh clienttttt");
    }, 1000);
  }, []);

  return <h1>{s}</h1>;
};
