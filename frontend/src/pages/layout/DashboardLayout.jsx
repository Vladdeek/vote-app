import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from '../../components/Loader.jsx'
import Header from '../../components/Header.jsx'

export default function DashboardLayout() {
	const navigate = useNavigate()
	const [isAuthorized, setIsAuthorized] = useState(true)
	return (
		<div className='w-full'>
			<Header isAuthorized={isAuthorized} />
			<Outlet />
		</div>
	)
}
