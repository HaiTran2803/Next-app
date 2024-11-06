export default function DashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login,
    signup
  }: {
    children: React.ReactNode
    users: React.ReactNode
    revenue: React.ReactNode
    notifications: React.ReactNode
    login: React.ReactNode
    signup: React.ReactNode
  }) {

  // const isLoggedIn = Math.floor(Math.random()*2) //random 1 or 0 to hide and show interface
  const isLoggedIn = false

return isLoggedIn ? (
    <div style={{background:"white"}}>
    <div>{children}</div>
    <div style={{display:"flex"}}>
        <div style={{display:"flex", flexDirection:"column"}}>
            <div>{users}</div>
            <div>{revenue}</div>
        </div>
        <div style={{display:"flex", flex:"1"}}>
          {notifications} <div>{login}</div>
        </div>
    </div>
    </div>
    ) : (<div>
            <div>
              {signup}
            </div>
          </div>
        )
}