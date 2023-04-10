interface Props {
  className?: string
}

export const CurrentUser: React.FC<Props> = ({ className }) => {
  return (
    <div className={className} text-white pt-32px pb-44px px-16px>
      <h2>未登录用户</h2>
      <div text="#3c6382">点击这里登录</div>
    </div>
  )
}
