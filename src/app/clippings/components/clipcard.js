const ClipCard = (title, author, colors, book) => {
    const gradientStyle = {
        background: `linear-gradient(to bottom, ${colors[0]}, ${colors[1]})`
    };
    return (
        <div id={`${book}`} className="p-5 w-[300px] h-[180px] rounded-md overflow-hidden cursor-pointer hover:brightness-105" style={gradientStyle}>
            <p id={`${book}`}  className="font-black text-2xl line-clamp-2 text-[#3d3d3d]">{title}</p>
            <p id={`${book}`}  className="font-bold text-lg text-gray-500 mt-2">{author}</p>
        </div>
    )
}

export default ClipCard;