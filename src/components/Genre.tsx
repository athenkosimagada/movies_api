interface GenreProps {
  image?: string
  type?: string
}
function Genre({image, type}: GenreProps) {
  return (
    <div className='genre'>
      <img src={image} alt={type} />
      <div className="genre-title">
      <p>{type}</p>
      </div>
    </div>
  )
}

export default Genre