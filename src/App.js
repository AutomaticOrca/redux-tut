import { useSelector, useDispatch } from "react-redux";
// 导入创建action对象的方法
import { decrement, increment } from "./store/modules/counterStore";
function App() {
  const { count } = useSelector((state) => state.counter);
  // 得到dispatch函数
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}></button>
      {count}
      <button onClick={() => dispatch(increment())}></button>
    </div>
  );
}

export default App;
