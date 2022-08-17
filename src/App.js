import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseCount,
  increaseCount,
  getLatestNews
} from './redux/actions/actionCreator';

const App = () => {
  const count = useSelector((store) => store?.counter?.count);

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCount());
  };

  const handleDecrease = () => {
    dispatch(decreaseCount());
  };

  const handleNews = () => {
    dispatch(getLatestNews());
  };

  return (
    <div>
      <button onClick={handleIncrease}>Inc +</button>
      <button onClick={handleDecrease}>Dec -</button>
      <button onClick={handleNews}>Get news</button>
      <h2>{count}</h2>
    </div>
  );
};

export default App;
