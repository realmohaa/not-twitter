import {
  BellIcon,
  HashtagIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
  BookmarkIcon
} from '@heroicons/react/outline'
import SidebarItem from './SidebarItem'



const Sidebar = () => {
  return (
    <div className='flex flex-col col-span-2'>
      <img className='h-6 w-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"/>
      <SidebarItem Icon={HomeIcon} title="Home"/>
      <SidebarItem Icon={HashtagIcon} title="Explore"/>
      <SidebarItem Icon={BellIcon} title="Notifications"/>
      <SidebarItem Icon={MailIcon} title="Messages"/>
      <SidebarItem Icon={BookmarkIcon} title="Bookmarks"/>
      <SidebarItem Icon={CollectionIcon} title="Lists"/>
      <SidebarItem Icon={UserIcon} title="Sign In"/>
      <SidebarItem Icon={DotsCircleHorizontalIcon} title="More"/>
    </div>
  )
}

export default Sidebar