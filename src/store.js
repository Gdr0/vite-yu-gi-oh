import { reactive } from "vue";

export const store = reactive({
  CardList: [],
  ArchetypeList: [],

  apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0",

  FindArchetype: "",
});
// https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0
