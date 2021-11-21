import { FC, useEffect, useState } from "react";

const Home: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      console.log(isLoading);
    }, 5000);
  }, [isLoading]);

  return isLoading ? <div>Loading</div> : <div>Home</div>;
};

export default Home;
