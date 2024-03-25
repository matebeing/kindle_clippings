'use client';

export default function Navbar() {
    return (
        <nav className=" max-w-[1300px] mx-auto flex justify-center items-center text-4xl font-bold bg-[#F8F8F8] mt-4 rounded-lg cursor-pointer" onClick={() => window.location.href = '/'}>
            <p className="flex gap-1 p-5 text-[#373737] text-2xl">
                <span>Kindle</span>
                <span className="font-light">Clippings</span>
            </p>
            <p className="text-sm text-gray-400">by Matheus Oliveira</p>
        </nav>
    )
}