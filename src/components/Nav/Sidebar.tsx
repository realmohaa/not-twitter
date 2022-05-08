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
    <div className='flex px-4 flex-col items-center md:items-start col-span-2'>
      <div className='fixed'>
        <img className='h-6 w-8 mx-4 my-6' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"/>
        <SidebarItem Icon={HomeIcon} title="Home"/>
        <SidebarItem Icon={HashtagIcon} title="Explore"/>
        <SidebarItem Icon={BellIcon} title="Notifications"/>
        <SidebarItem Icon={MailIcon} title="Messages"/>
        <SidebarItem Icon={BookmarkIcon} title="Bookmarks"/>
        <SidebarItem Icon={CollectionIcon} title="Lists"/>
        <SidebarItem Icon={UserIcon} title="Sign In"/>
        <SidebarItem Icon={DotsCircleHorizontalIcon} title="More"/>
      </div>
    </div>
  )
}

export default Sidebar