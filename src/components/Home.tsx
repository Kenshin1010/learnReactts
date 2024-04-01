import React, { useEffect, useState } from "react";

type Props = {
  name: string;
  age: number;
};
export default function Home(props: Props) {
  console.log(props);
  const [first, setFirst] = useState("asdasdasdasd");
  const [second, setSecond] = useState<number>(1);

  const handlePlusNumber = (number: number) => {
    setSecond(number + 1);
    console.log(number);
  };

  useEffect(() => {
    console.log("second");
  }, []);

  return (
    <button onClick={() => handlePlusNumber(second)}>name: {props.name}</button>
  );
}
