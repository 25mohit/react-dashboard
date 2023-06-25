import StaticSidebar from "../../StaticSidebar/StaticSidebar"

const MainBody = props => {
  return (
    <div className='body-main-ui'>
      <StaticSidebar />
      <div className="body_container">
        {props.children}
      </div>
    </div>
  )
}

export default MainBody