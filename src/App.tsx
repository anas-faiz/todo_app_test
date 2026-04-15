import InputBox from "./components/InputBox";
import TodoCard from "./components/TodoCard";

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center">
      
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          📝 Todo App
        </h1>

        <div className="space-y-4">
          <InputBox />
          <TodoCard />
        </div>

      </div>

    </div>
  );
}