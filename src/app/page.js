import Image from "next/image";
import Navbar from "./components/navbar";
import Import from './components/import';
import svgKindle from './assets/kindle.svg'
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="max-w-[1300px] mx-auto lg:m-0 sm:m-5 ">
    <Navbar />


    <div className="flex justify-center mt-[8rem] ">
      <div className="flex lg:flex-row md:flex-col sm:flex-col gap-28 w-[800px]">
          <div className="flex justify-center items-center w-ful lg:w-[400px] sm:w-full">
            <Image src={svgKindle} alt="Kindle svg" width={200} height={200}  priority></Image>
          </div>
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
