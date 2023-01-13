

export const LinkNavHeader = ({text}) => {
  return (
    <a href="#" className="relative py-8 group">
        <span className="peer">{text}</span>
        <span className="absolute left-0 bottom-0 md:block w-full group-hover:bg-orange-500 h-1 "></span>
      </a>

  )
}
