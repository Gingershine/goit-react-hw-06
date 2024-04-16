
import { useDispatch, useSelector } from 'react-redux'
import { selectNameFilter } from '../../redux/filtersSlice'
import css from './SearchBox.module.css'
import { changeFilter } from '../../redux/filtersSlice'

const SearchBox = () => {

  const filter = useSelector(selectNameFilter)
  const dispatch = useDispatch()
 
  return (
    <div>
      <p className={css.text}>Find contacts by name</p>
      <input  className={css.input} type="text" value={filter} onChange={(event) => dispatch(changeFilter(event.target.value))} />
          
    </div>
  )
}

export default SearchBox
