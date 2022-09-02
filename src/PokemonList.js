import React from 'react';

export default function PokemonList({pokemon}) {
    return(
        <div>
            {pokemon.map(p => (
                <div ley={p}>{p}</div>
            ))}
        </div>
    )
}