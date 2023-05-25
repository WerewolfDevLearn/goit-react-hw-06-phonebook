import FilterStl from './Filter.module.css';
import { RootState } from '../../redux/store';
import { ContactFilter } from '../../redux/filterSlices';
import { useDispatch, useSelector } from 'react-redux';
// interface Props {
//   filter: string;
//   onChangeFilter(e: React.ChangeEvent<HTMLInputElement>): void;
// }

export default function Filter() {
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();
  return (
    <div className={FilterStl.filterContainer}>
      <label className={FilterStl.label}>
        Find contact by name:
        <input
          type='text'
          value={filter}
          onChange={(e) => dispatch(ContactFilter(e.target.value))}
          name='filter'
          className={FilterStl.input}
        />
      </label>
    </div>
  );
}
