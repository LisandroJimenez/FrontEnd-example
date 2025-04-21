import { useEffect } from 'react'
import { Navbar } from '../../components/navbars/navbar'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { Content } from '../../components/dashboard/Content'
import { Sidebar } from '../../components/dashboard/Sidebar'
import { useChannels } from '../../shared/hooks/useChannels'
import { useUserDetails } from '../../shared/hooks'

import './dashboardPage.css'

export const DashBoardPage = () => {

  const {getChannels, allChannels, isFetching, followedChannels} = useChannels();
  const {isLogged} = useUserDetails();

  useEffect(() => {
    getChannels(isLogged)
  },[]);


  if (isFetching) {
    return <LoadingSpinner/>
  }
  return (
    <div className="dashboard-container">
      <Navbar />
      <Content channels={allChannels} getChannels={getChannels}/>
      <Sidebar channels={followedChannels}/>
    </div>
  )
}

export default DashBoardPage