import React from 'react';
import { useState } from "react";
import { FilterFormContainer, SearchFieldWrapper, SearchInputField, StatusRadioContainer, SearchButton } from "./style";

const STD_STATUS_RADIO_OPTIONS = {
  ALL : {
      title : 'All',
      value : '',
  },
  DONE : {
      title : 'Done',
      value : 'true',
  },
  OPEN : {
      title : 'Open',
      value : 'false',
  },
}

function FilterSection(props) {
    const { handleFilterApplied } = props
    const [searchText, setSearchText] = useState("");
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
      setSearchText(e?.target?.value)
    }
    
    const handleChangeStatus = (e) => {
      const value = status === e?.target.value ? '' : e?.target.value
      setStatus(value)
    }

    const handleSearch = (e) => {
      handleFilterApplied(e, searchText, status)
    }
    
    return (
      <FilterFormContainer onSubmit={()=>{}}>
        <h3>Filter form</h3>
        <SearchFieldWrapper>
          <SearchInputField
            type="text"
            value={searchText}
            placeholder="Enter Search Text Here"
            onChange={handleChange}
          />
        </SearchFieldWrapper>
        <StatusRadioContainer>
          <h3>Status: </h3>
          <div>
            <input 
              type="radio" value={STD_STATUS_RADIO_OPTIONS.ALL.value} onChange={handleChangeStatus} checked={!status} 
            />
            <label>{STD_STATUS_RADIO_OPTIONS.ALL.title}</label>
          </div>
          <div>
            <input
              type="radio" value={STD_STATUS_RADIO_OPTIONS.DONE.value} onChange={handleChangeStatus} checked={status === 'true'} 
            />
            <label>{STD_STATUS_RADIO_OPTIONS.DONE.title}</label>
          </div>
          <div>
            <input
              type="radio" value={STD_STATUS_RADIO_OPTIONS.OPEN.value} onChange={handleChangeStatus} checked={status === 'false'} 
            />
            <label>{STD_STATUS_RADIO_OPTIONS.OPEN.title}</label>
          </div>
        </StatusRadioContainer>
        <SearchButton
          onClick={handleSearch}
        >
          Apply
        </SearchButton>
      </FilterFormContainer>
    );
  }
  
  export default FilterSection;
  