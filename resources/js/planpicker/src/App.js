import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
  } from "react-router-dom";


import PlansPage 		from './pages/plan/PlanListPage'
import AddEditPage 		from './pages/plan/AddEditPage'
import ViewPlanPage 	from "./pages/plan/ViewPage"

import './App.css';

function App() {
	return (

		<Router>
			<Routes>
				<Route exact path="/"             	element={<PlansPage/>} />

				<Route exact path="/view/:id"   	element={<ViewPlanPage/>} />
				<Route exact path="/add"          	element={<AddEditPage />} />
				<Route exact path="/edit/:id"		element={<AddEditPage />} />
				
			</Routes>
		</Router>
	);
}

export default App;
