import './Assets/CSS/TodoItems.css'; 
import cross from './Assets/cross.png';
import tick from './Assets/tick.png';
import not_tick from './Assets/not_tick.png';


const TodoItems = ({no,display,text}) => {
  return (
    <div className='todoitems'>
        <div className="todoitems-container">
            <img src={not_tick} alt="" />
            <img src={tick} alt="" />
            <div className="todoitems-text">{text}</div>
            </div>
                <img src={cross} alt="" />
            
      
    </div>
  )
}

export default TodoItems