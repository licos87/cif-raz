import { useEffect, useState } from 'react';
import { Spiner } from '../spiner';

type TData = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}

export function JsonplaceholderList() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<TData[]>([]);
  async function fetchData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .catch((err) => console.error(err))
      .finally(()=> setIsLoading(false));
    setData(data);
  }
  useEffect(() => {
    fetchData();
  }, [isLoading]);
  return (
    <>
      <ul>
        {isLoading && <Spiner/>}
        {data.length !== 0 && data.map((item) => {
          return (
            <li key={item.id}>
              <h2>Название книги - {item.title}</h2>
              <p>Краткое описание: {item.body}</p>
            </li>
          )
      })}
      </ul>
    </>
  )
}
