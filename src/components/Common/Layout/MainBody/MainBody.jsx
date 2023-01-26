const MainBody = props => {
  return (
    <div className='body-main-ui'>
      <div className="body_container">
        {props.children}
      </div>
    </div>
  )
}

export default MainBody