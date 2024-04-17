import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Subscriber from '@/components/home/Subscriber';

interface NewsArticle {
  article_id: string;
  title: string;
  pubDate: string;
  country: string[];
  creator: string | null;
  language: string;
  link: string;
}

const Index: React.FC = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API;

  const fetchNews = async () => {
    try {
      const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=Web3,blockchain&language=en`;
      const response = await axios.get(url);
      setNews(response.data.results);
    } catch (error) {
      console.error('Error fetching news:', error);
      setNews([]);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
    <div className="p-4 py-24 mx-auto max-w-7xl ">
      <h1 className="text-3xl mb-4">News</h1>

      {news.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full  border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 ">Title</th>
                <th className="p-2">Date & Time</th>
                <th className="p-2">Country</th>
                <th className="p-2">Publisher</th>
               
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {news.map((article) => (
                <tr key={article.article_id} className="border-b border-gray-300">
                  <td className="p-2 ">{article.title}</td>
                  <td className="p-2">{article.pubDate}</td>
                  <td className="p-2">{article.country.join(', ')}</td>
                  <td className="p-2">{article.creator}</td>
                  <td className="p-2">
                    <Link href={article.link} target='_blank' passHref>
                      <button className="px-2 w-[100px] text-[14px] py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="italic">Loading...</p>
      )}
    </div>
    <Subscriber/>
    </div>
  );
};

export default Index;
