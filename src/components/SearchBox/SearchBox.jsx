import css from './SearchBox.module.css'
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/filtersSlice";

export default function SearchBox(){
    const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  
    const handleFilter = (e) => {
        const name = e.target.value.trim();
        dispatch(setStatusFilter(name));
    };
    return (
      <div className={css.box}>
        <p className={css.label}>Find contact by name</p>
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={handleFilter}
        />
      </div>
    );
    
}
