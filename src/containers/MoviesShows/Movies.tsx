import NewDocButton from '../../components/NewDocButton'
import Genres from './Genres'

function Movies() {
  return (
    <div className='movies container'>
        <NewDocButton
            className="btn-primary"
            buttonName="Movies"
          />
        <Genres />
    </div>
  )
}

export default Movies