
var largePhoto = (props) => {
  return (props.photo ? <img className='largeImage' id='lg' src={props.photo} width='500' height='auto'></img> : <div></div>)
}
export default largePhoto;