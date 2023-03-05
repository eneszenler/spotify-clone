import Section from "components/Section";
import tracks from "data/tracks";
import React from "react";

const Home = () => {
  const shuffle = (arr) => {
    const newArr = arr.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
  };

  return (
    <div className="grid gap-y-8">
      <Section title="Yakınlarda Çalınanlar" more="/" data={shuffle(tracks)} />
      <Section title="En çok dinlediğin mix'ler" more="/" data={shuffle(tracks)} />
      <Section title="Bugün için tavsiye" more="/" data={shuffle(tracks)} />
    </div>
  );
};

export default Home;
