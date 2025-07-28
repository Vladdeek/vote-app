import { createRoot } from 'react-dom/client'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	useNavigate,
} from 'react-router-dom'
import { Suspense } from 'react'
import './index.css'
import Authorization from './pages/authorization'
import DashboardLayout from './pages/layout/DashboardLayout'
import MainPage from './pages/MainPage'
import Profile from './pages/Profile'
import Voting from './pages/Voting'
import Constructor from './pages/ConstructorVoting'
import DetailVoting from './pages/DetailVotingPage/DetailVoting'

function MainApp() {
	const navigate = useNavigate()
	return (
		<Suspense
			fallback={
				<>
					<p>Загрузка</p>
				</>
			}
		>
			<Routes>
				<Route path='/' element={<DashboardLayout />}>
					<Route path='/auth' element={<Authorization />} />
					<Route path='/main' element={<MainPage />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/voting' element={<Voting />} />
					<Route path='/constructor' element={<Constructor />} />
					<Route path='/details' element={<DetailVoting />} />
				</Route>
			</Routes>
		</Suspense>
	)
}

createRoot(document.getElementById('root')).render(
	<Router>
		<MainApp />
	</Router>
)
