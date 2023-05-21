import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "../components/context";
const url = `https://newsapi.org/v2/everything?`;
// export const SearchNews = (input) => {
//   const { setSearchNews, setCategoriesByNews } = useGlobalContext();
//   const resp = useQuery({
//     queryKey: ["news"],
//     queryFn: async () => {
//       const result = await axios.get(
//         `${url}q=${input}&apiKey=9ca58c978d54485d804bdd5fd1c489d7`
//       );
//       setSearchNews(result.data);
//       console.log(result.data);
//       return result.data;
//     },
//   });
// };
const catUrl = `https://newsapi.org/v2/top-headlines?`;
export const SearchNewsByCategories = () => {
  const { setCategoriesByNews, searchByCatKeyword } = useGlobalContext();
  try {
    const resp = useQuery({
      queryKey: ["catNews" ,searchByCatKeyword],
      queryFn: async () => {
        const result = await axios.get(
          `${catUrl}category=${searchByCatKeyword}&apiKey=9ca58c978d54485d804bdd5fd1c489d7`
        );
        setCategoriesByNews(result.data)
        console.log(result.data);
        return result.data;
      },
    });
  } catch (error) {
    console.log(error);
  }

  console.log(cat);
};
