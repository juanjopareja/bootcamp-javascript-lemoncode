import axios from "axios";

function getCharacters() {
    return axios
        .get("https://rickandmortyapi.com/api/character")
        .then(response => {
            return response.data.results;
        });
}

function getCharacterById(id) {
    return axios
        .get("https://rickandmortyapi.com/api/character/" + id)
        .then(response => {
            return response.data.results;
        })
}

function getEpisodeList() {
    return axios
        .get("https://rickandmortyapi.com/api/episode")
        .then(response => {
            return response.data.results;
        })
}

export { getCharacters, getCharacterById, getEpisodeList };