import "./styles.css";
import * as Utils from "./utils.js";
import * as DataBusiness from "./data-business.js";

DataBusiness.getCharacters()
    .then(data => {
        const characterArray = [];
        document.getElementById("root").innerHTML = "";

        for (const item of data) {
            const characterFn = Utils.createCharacterRow(item);
            characterFn.onclick = function() {
                DataBusiness.getCharacterById(item.id);
                Utils.showCharacter(item);
            }
            characterArray.push(characterFn);
        }

        for (const itemRow of characterArray) {
            document.getElementById("root").append(itemRow);
        }
    });

DataBusiness.getEpisodeList()
    .then(data => {
        const episodeList = [];

        for (const item of data) {
            const episodeFn = Utils.createEpisodeRow(item);
            episodeFn.onclick = function() {
                DataBusiness.getEpisodeList(item.id);
                Utils.showEpisode(item);
            }
            episodeList.push(episodeFn);
        }

        for (const itemRow of episodeList) {
            document.getElementById("episode-list").append(itemRow);
        }
    })