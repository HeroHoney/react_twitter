import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {

    return(
        <div>
            <MyInput value={filter.query} onChange={e=>setFilter({...filter,query: e.target.value})} placeholder="search..."/>
            <MySelect
            value={filter.sort}
            defaultValue="None"
            onChange={selectedSort=>setFilter({...filter, sort: selectedSort})}
            options={[
                { value: 'title', name: 'By Name' },
                { value: 'desc', name: 'By Description' }
            ]}
            ></MySelect>
      </div>
    )
}

export default PostFilter