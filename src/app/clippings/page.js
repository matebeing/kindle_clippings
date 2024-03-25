'use client';

import { useContext, useState, useEffect } from 'react';

import { FileContext } from '../hooks/fileContext.js';
import Navbar from '../components/navbar.jsx';
import ClipCard from './components/clipcard.js';

function handleSetClippings(e) {
  const blocks = e.split(/^=+$/gm);

  const res = blocks
    .map(
      (block) => block
        .split(/[\r\n]+/)
        .filter((line) => line.length > 0)
    )
    .filter((block) => block.length === 3)
    .reduce((acc, [book, info, quote]) => {
      const [key, title, author, fallback] = book.trim().match(/(^.+)\s*\((.+)\)$|(.+)/);
      const [_, begin, end, position] = info.match(/(\d+)\-(\d+)|(\d+)/);

      if (acc[book] === undefined) {
        const hue = 360 * Math.random();
        const saturation = 25 + 70 * Math.random();

        const lightColor = "hsl(" + 360 * Math.random() + ',' +
        (25 + 70 * Math.random()) + '%,' + 
        (85 + 10 * Math.random()) + '%, 40%)'

        const darkColor = "hsl(" + 360 * Math.random() + ',' +
        (25 + 70 * Math.random()) + '%,' + 
        (85 + 10 * Math.random()) + '%)'

        acc[book] = {
          title: (title ?? fallback).trim(),
          author,
          quotes: [],
          backgroundColor: [lightColor, darkColor]
        };
      }

      acc[book].quotes.push({
        position: [parseInt(begin ?? position), parseInt(end ?? position)],
        date: info.split("Adicionado: ").at(-1),
        content: quote,
      });

      return acc;
    }, {});

  return res;
}

const Clippings = () => {
  const { fileData, setFileData } = useContext(FileContext);
  const [books, setBooks] = useState([]);
  const [bookTitle, setBookTitle] = useState('')

  useEffect(() => {
    if (!fileData) {
      window.location.href = "/"
      console.log('No file data');
    }
    setBooks(handleSetClippings(fileData));
  }, [fileData]);

  const handleBookTitle = (e) => {
    if (e in books) {
      setBookTitle(e)
    }
  }

  return (
    <div className='max-w-[1300px] mx-auto'>
      <Navbar />
      <div className='flex gap-5 mt-10 h-52 overflow-auto '>
        <div className='flex flex-row flex-grow gap-5' onClick={(e) => handleBookTitle(e.target.id)}>
          {Object.entries(books).map(([book, { title, author, quotes, backgroundColor }]) => (
            ClipCard(title, author, backgroundColor, book)
          ))}
        </div>
      </div>

      <div className='mt-14 mb-20' style={{display: bookTitle !== '' ? 'block' : 'none'}}>
        <h1 className='font-black text-4xl'>
          {bookTitle in books ? books[bookTitle].title : 'Title not found'}
        </h1>
        <h2 className='font-bold text-2xl text-[#6A6A6A]'>
          Por {bookTitle in books ? books[bookTitle].author : 'Author not found'} - <span className='font-normal'>{bookTitle in books ? books[bookTitle].quotes.length : '0'} recortes</span>
        </h2>
        <div>
          {bookTitle in books ? books[bookTitle].quotes.map(({ position, date, content }, index) => (
            <div className='mt-10 pl-2' key={index} style={{borderLeft: `10px solid ${books[bookTitle].backgroundColor[1]}`}}>
              <p className='font-bold text-lg '>
                {content}
              </p>
              <p className='font-normal text-lg text-[#6A6A6A]'>
                {position[0] === position[1] ? `Posição: ${position[0]}` : `Posição: ${position[0]}-${position[1]}`}
              </p>
              <p className='font-normal text-lg text-[#6A6A6A]'>
                {date}
              </p>
            </div>
          )) : 'No quotes found'}
        </div>
      </div>
    </div>
  )
}

export default Clippings