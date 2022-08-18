import { useSelector } from 'react-redux';
import News from '../../components/news/News';

const LatestNews = () => {
  const { latestNews } = useSelector((store) => store?.news || {});
  const { latestNewsError } = useSelector((store) => store?.errors || {});

  return (
    <div>
      <News news={latestNews} error={latestNewsError} title="Latest News" />
    </div>
  );
};

export default LatestNews;
