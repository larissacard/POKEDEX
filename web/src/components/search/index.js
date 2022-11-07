import React, {useState} from "react";
import { 
    SearchWrapper, 
    SearchInput, 
 } from "./styles";

export const Search = (props) => {
    const [search, setSearch] = useState("dito");
    const {onSearch} = props;

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }
    
    const onButtonClickHandler = () => {
        onSearch(search)
    }


   return (
    <SearchWrapper>
        <SearchInput placeholder='Procure por pokemons' onChange={onChangeHandler}/>
        <button onClick={onButtonClickHandler}> 
        a</button> 
    </SearchWrapper>
   )
}