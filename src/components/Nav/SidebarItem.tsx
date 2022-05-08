import { SVGProps } from "react"

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
}

const SidebarItem = ({Icon, title}: Props) => {
  return (
    <div 
      className="
        flex items-center max-w-fit space-x-2 py-3 px-4 rounded-full cursor-pointer transition-all duration-200 hover:bg-gray-100 group"
    >
        <Icon className="h-6 w-6"/>
        <p className="group-hover:text-twitter hidden md:inline-flex text-base font-light lg:text-lg">{title}</p>
    </div>
  )
}

export default SidebarItem