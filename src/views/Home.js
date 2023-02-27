import Section from "components/Section";
import React from "react";

const data = [
  {
    id: 1,
    title: "The Melodic Blue",
    description: "Baby Keem",
    image_url: "https://i.scdn.co/image/ab67616d00001e021bfa23b13d0504fb90c37b39",
    type: "album",
  },
  {
    id: 2,
    title: "The Melodic Blue",
    description: "Baby Keem",
    image_url: "https://i.scdn.co/image/ab67616d00001e021bfa23b13d0504fb90c37b39",
    type: "album",
  },
  {
    id: 3,
    title: "The Melodic Blue",
    description: "Baby Keem",
    image_url: "https://i.scdn.co/image/ab67616d00001e021bfa23b13d0504fb90c37b39",
    type: "podcast",
  },
  {
    id: 4,
    title: "The Melodic Blue",
    description: "Baby Keem",
    image_url: "https://i.scdn.co/image/ab67616d00001e021bfa23b13d0504fb90c37b39",
    type: "album",
  },
  {
    id: 5,
    title: "The Melodic Blue",
    description: "Baby Keem",
    image_url: "https://i.scdn.co/image/ab67616d00001e021bfa23b13d0504fb90c37b39",
    type: "artist",
  },
];

const Home = () => {
  return (
    <div className="grid gap-y-8">
      <Section title="Yakınlarda Çalınanlar" more="/" data={data} />
      <Section title="En çok dinlediğin mix'ler" more="/" data={data} />
      <Section title="Bugün için tavsiye" more="/" data={data} />
    </div>
  );
};

export default Home;
