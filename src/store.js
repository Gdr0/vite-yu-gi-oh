import { reactive } from "vue";

export const store = reactive({
  CardList: [],
  apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0",
  //   searchText: "",
  //   loading: true,
});
// https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0
