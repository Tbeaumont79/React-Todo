import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TaskApp } from "./component/taskApp";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<TaskApp />
		</QueryClientProvider>
	);
}

export default App;
