const createCharacterRow = (character) => {
    const element = document.createElement("div");

    const avatar = createAvatar(character);
    element.appendChild(avatar);

    const link = createRowText(character);
    element.appendChild(link);

    element.className = "character-row";

    return element;
};

const createAvatar = (character) => {
    const element = document.createElement("img");
    element.width = 150;
    element.className = "thumbnail";
    element.src = character.image;

    return element;
};

const createRowText = (character) => {
    const element = document.createElement("span");
    element.append(character.name);

    return element;
};

const createAvatarDetail = (character) => {
    const element = document.createElement("img");
    element.width = 350;
    element.src = character.image;

    return element;
};

const showCharacter = (character) => {
    console.log("character", character);
    const characterDetail = document.getElementById("character-detail");

    characterDetail.innerHTML = "";
    characterDetail.appendChild(createAvatarDetail(character));
    characterDetail.appendChild(createParagraph("Name: " + character.name));
    characterDetail.appendChild(createParagraph("Status: " + character.status));
    characterDetail.appendChild(createParagraph("Species: " + character.species));
};

const createParagraph = (text) => {
    const element = document.createElement("p");
    element.append(text);
    return element;
};

const createEpisodeNum = (episode) => {
    const element = document.createElement("span");
    element.append(episode.id + ". ");

    return element;
};

const createEpisodeName = (episode) => {
    const element = document.createElement("span");
    element.append(episode.name);

    return element;
};

const createEpisodeText = (episode) => {
    const element = document.createElement("p");

    const number = createEpisodeNum(episode);
    element.append(number);

    const name = createEpisodeName(episode);
    element.append(name);

    return element;
};

const createEpisodeRow = (episode) => {
    const element = document.createElement("div");

    const link = createEpisodeText(episode);
    element.append(link);

    element.className = "episode-list";

    return element;
};

const showEpisode = (episode) => {
    console.log("episode", episode);
    const characterDetail = document.getElementById("character-detail");
  
    characterDetail.innerHTML = "";
    characterDetail.appendChild(createParagraph("Number: " + episode.id));
    characterDetail.appendChild(createParagraph("Name: " + episode.name));
    characterDetail.appendChild(createParagraph("Air Date: " + episode.air_date));
};

export { createCharacterRow, showCharacter, createEpisodeRow, showEpisode };
