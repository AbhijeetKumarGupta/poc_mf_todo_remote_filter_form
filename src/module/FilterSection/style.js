import styled from "styled-components";

export const FilterFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    color: white;
    gap: 15px;
`

export const SearchFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const SearchInputField = styled.input`
    padding: 10px;
    width: 50%;
`

export const StatusRadioContainer = styled.span`
    display: flex;
    align-items: center;
`

export const SearchButton = styled.button`
    text-align: center;
    padding: 10px;
    background-color: transparent;
    border: 2px solid white;
    margin-left: 5px;
    width: 10%;
    min-width: 50px;
    cursor: pointer;
    border-radius: 5px;
    color: white;
`