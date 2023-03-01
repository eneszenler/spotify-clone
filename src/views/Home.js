import Section from "components/Section";
import React from "react";

const data = [
  {
    id: 1,
    title: "The Melodic Blue",
    description: "Baby Keem",
    artist: "Baby Keem",
    image_url: "https://i.scdn.co/image/ab67616d00001e021bfa23b13d0504fb90c37b39",
    type: "album",
    src: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/5mPqCV3NkFBfGw1MwNpe6njr3YLsRY4BkUZxP90Z.mp3",
  },
  {
    id: 2,
    title: "The Melodic Blue",
    description: "Baby Keem",
    artist: "Baby Keem",
    image_url: "https://i.scdn.co/image/ab67616d00001e021bfa23b13d0504fb90c37b39",
    type: "album",
    src: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/qRBSpt6KggII1ajuPZRxApavzdNXZpjYwdzUhXAh.mp3",
  },
  {
    id: 3,
    title: "The Melodic Blue",
    description: "Baby Keem",
    artist: "Baby Keem",
    image_url: "https://i.scdn.co/image/ab67616d00001e021bfa23b13d0504fb90c37b39",
    type: "podcast",
    src: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/LdluB588JIRLjOLCrGksEPOCa1F58KVDg88eswUv.mp3",
  },
  {
    id: 4,
    title: "The Melodic Blue",
    description: "Baby Keem",
    artist: "Baby Keem",
    image_url: "https://i.scdn.co/image/ab67616d00001e021bfa23b13d0504fb90c37b39",
    type: "album",
    src: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/NecjADHA86mEpPCaWKeo6zEi0Gif5ol2WUhkGfZx.mp3",
  },
  {
    id: 5,
    title: "The Melodic Blue",
    description: "Baby Keem",
    artist: "Baby Keem",
    image_url: "https://i.scdn.co/image/ab67616d00001e021bfa23b13d0504fb90c37b39",
    type: "artist",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
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
