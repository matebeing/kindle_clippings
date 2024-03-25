import Image from "next/image";
import Navbar from "./components/navbar";
import Import from './components/import';
import svgKindle from './assets/kindle.svg'
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="max-w-[1300px] mx-auto">
      <Navbar />


    <div className="flex justify-center mt-[8rem] ">
      <div className="flex  gap-28  w-[800px]">
          <Image src={svgKindle} alt="Kindle svg" width={300} height={300}  priority></Image>
          <Import />
      </div>
    </div>

    <div className="flex justify-center mt-20 text-gray-400">
      <a href="https://github.com/matebeing" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-3 font-medium">
        <FaGithub />
        <p>matebeing</p>
      </a>
    </div>
    </main>
  );
}
