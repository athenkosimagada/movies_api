import { HiArrowNarrowRight } from 'react-icons/hi'
import image from '../assets/images/action.png'

function Genre() {
  return (
    <div className='genre'>
      <img src={image} alt="" />
      <div className="genre-title">
      <p>Action</p>
      <HiArrowNarrowRight />
      </div>
    </div>
  )
}

export default Genre