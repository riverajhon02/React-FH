
import PropTypes from 'prop-types';


const getSaludo =(nombre)=>{
  return `Hola ${nombre}`;
}

const FirstApp = ({title , name}) => {
  return (
    <>
        <h1>{title}</h1>
        <h2>{name}</h2>
       
    </>
    
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired

}

FirstApp.defaultProps = {
  title: 'No hay Titulo',
  name: 'Jhon Rivera'
}

export default FirstApp