import React from 'react'
import './profilePage.css'
import Image from '../../Components/Image/image'
import Gallery from '../../Components/Gallery/gallery'
import Boards from '../../Components/Boards/boards'
import {useQuery} from '@tanstack/react-query'
import ApiRequest from '../../Utility/apiRequest'
import { useParams } from 'react-router'
import FollowButton from './followButton'

function profilePage() {
  const [type,setType] = React.useState('saved')

  const {username} = useParams()

  const {isPending, data, error} = useQuery({
      queryKey:['pin',username],
      queryFn: () => ApiRequest.get(`/users/${username}`).then((res) => res.data),
    });
  
    if (isPending) return "Loading...";
  
    if (error) return "An error has occurred: " + error.message;
  
    if (!data) return "User not found!";

  return (
    <div className='profilePage'>
      <Image 
        src={data.img ? data.img : undefined} 
        path={!data.img ? "/general/noAvatar.png" : undefined} 
        alt="" 
      />
      <h1 className='profileName'>{data.displayName}</h1>
      <span className='profileUsername'>@{data.userName}</span>
      <div className="followCounts">{data.followerCount} followers - {data.followingCount} followed</div>
      <div className='profileInteractions'>
        <Image path='/general/share.svg' alt=''/>
        <div className='profileButtons'>
          <button>Message</button>
          <FollowButton
            isFollowing={data.isFollowing}
            username={data.userName}
          />
        </div>
        <Image path='/general/more.svg' alt=''/>
      </div>
      <div className="profileOptions">
        <span onClick={()=>setType('created')} className={type==='created' ? 'active' : ''}>Created</span>
        <span onClick={()=>setType('saved')} className={type==='saved' ? 'active' : ''}>Saved</span>
      </div>
      {type==='created' ? <Gallery userId={data._id}/> : <Boards userId={data._id}/>}
    </div>
  )
}

export default profilePage