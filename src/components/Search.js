import { useState } from 'react';
import { Input } from 'antd';
import { Divider } from 'antd';

function Search({ filterList }) {
  const [search, setSearch] = useState();
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    filterList(value);

    setSearch(e.target.value);
  };

  return (
    <div>
      <Divider id="styleFont">
        <b>Search</b>
      </Divider>

      <div>
        <Input
          className="styleFont"
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search food name"
        />
      </div>
    </div>
  );
}

export default Search;
