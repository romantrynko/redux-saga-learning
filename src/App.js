import { useDispatch, useSelector } from 'react-redux';
import News from './components/news/News';
import { getNews } from './redux/actions/actionCreator';

const App = () => {
  const latestNews = useSelector((store) => store?.news?.latestNews || []);
  const popularNews = useSelector((store) => store?.news?.popularNews || []);
  const dispatch = useDispatch();

  const handleNews = () => {
    dispatch(getNews());
  };

  return (
    <div>
      <button onClick={handleNews}>Get news</button>
      <News news={latestNews} title="Latest News" />
      <News news={popularNews} title="Popular News" />
    </div>
  );
};

export default App;
