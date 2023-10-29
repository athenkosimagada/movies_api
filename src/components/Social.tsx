interface SocialProps {
    name: string,
    icon: React.ReactNode
}

function Social({ name, icon }: SocialProps) {
  return (
    <div className="social">
        {icon}
        <p>{name}</p>
    </div>
  )
}

export default Social