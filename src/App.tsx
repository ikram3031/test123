import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./store/store";
import { increment, decrement, incrementByAmount } from "./store/slices/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">Count: {count}</h1>
      <div className="flex gap-4">
        <button 
          onClick={() => dispatch(increment())} 
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Increment
        </button>
        <button 
          onClick={() => dispatch(decrement())} 
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Decrement
        </button>
        <button 
          onClick={() => dispatch(incrementByAmount(5))} 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          +5
        </button>
      </div>
    </div>
  );
}

export default App;
