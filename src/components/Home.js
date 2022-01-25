import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataApi = async () => {
      const data = await fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed');
      const dataResult = await data.json();
      setData(dataResult);
    };
    fetchDataApi();
  }, [])
  console.log(data);

  return (
  <div>
    {data.map(el => (
      <div key={uuidv4()}>
        <h2>{el.title.rendered}</h2>
        <img src={el.jetpack_featured_media_url} alt={el.title.rendered} />
        <p>{el.excerpt.rendered.length > 100 ? el.excerpt.rendered.substr(0, 100) + '...' : el.excerpt.rendered}</p>
      </div>
    )

    )}
  </div>
)};

export default Home; 
