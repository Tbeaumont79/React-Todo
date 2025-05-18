import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TaskApp } from "./component/taskApp";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider
			client={queryClient}
			className="bg-teal-950 h-screen flex justify-center items-center"
		>
			<TaskApp />
		</QueryClientProvider>
	);
}

export default App;
