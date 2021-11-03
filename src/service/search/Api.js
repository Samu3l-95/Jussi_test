import service from "../api/rest";



export const Search = async (res) => {

 return await service.getRest(
    `anime?filter[text]=${res}&page[limit]=12`
  );
};
