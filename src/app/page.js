"use client"

import { Cards } from "./components/cards";
import { Header } from "./components/header";
import Navbar from "./components/navbar/navbar";
import { SectionServicos } from "./components/sectionservicos";



export default function Home() {
  return (

    <div >
      <Navbar />
      <Header />
      <Cards />
      <SectionServicos />
    </div>

  );
}
