import { LabelFilter } from './Filter.styled';

export const Filter = ({ filter, onChange }) => (
  <div>
    <LabelFilter>Find contacts by Name </LabelFilter>
    <input
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={onChange}
    />
  </div>
);
