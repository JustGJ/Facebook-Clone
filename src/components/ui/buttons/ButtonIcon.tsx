
interface IButtonIconProps {
    children: React.ReactNode
}

const ButtonIcon = ({ children }: IButtonIconProps) => {
  return (
    <button>{children}</button>
  )
}

export default ButtonIcon