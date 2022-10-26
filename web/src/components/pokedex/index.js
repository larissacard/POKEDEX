import { Cards } from '../cards';
import { Container } from './styles'


export const Pokedex = (props) => {
    const { pokemons, loading, page, setPage, totalPages } = props;

    return (
        <Container>
            {loading ? (
                <div>Carregando, segura fera...</div>
            ) : (
                <>
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                            <Cards key={index} pokemon={pokemon} />
                        );
                    })}
                </>)}
        </Container>
)}