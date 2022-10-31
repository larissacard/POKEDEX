import React, {useState} from "react";
import { 
    SearchWrapper, 
    SearchInput, 
    SearchIcon,
 } from "./styles";

export const Search = (props) => {
    const {onSearch} = props;
    const [search, setSearch] = useState("dito");

    const onChangeHandler =  (e) => {  
        let search = '';
        if(e){
            setSearch(e.target.value)
        }
        if(search !== ''){
            const results = search.filter((pokes) => {
                return pokes.name.toLowerCase().includes(search.toLowerCase());
            })
            setSearch(results)
        }

        // if(e.target.value.length === 0){
        //     setSearch(undefined).toLowerCase().includes(keyword.toLowerCase());
        // }
    }

    const onClickHandler = () => {
        onSearch(search)
    }

   return (
    <SearchWrapper>
        <SearchInput placeholder='Procure por pokemons' onChange={onChangeHandler}/>
        <button onClick={onClickHandler}>
            <SearchIcon/>  
        </button>
    </SearchWrapper>
   )
}