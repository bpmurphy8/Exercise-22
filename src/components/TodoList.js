import { useState } from "react";

const TodoList = () => {

    let [tasks, setTasks] = useState([]);
    let [num,setNum] = useState(1);
    let [taskDet,setTaskDet] = useState('');

    let clickHandler = () => {

        let taskObj = {"sno":num,"details":taskDet};
        tasks.push(taskObj);
        setTasks(tasks);
        num++;
        setNum(num);

    }

    let onChangeHandler = (e) => {
        setTaskDet(e.target.value);
    }
    

    return ( 
        <div className='container-fluid'>
            <p>Should see the table below</p>
            Task details<input type="text" onChange={onChangeHandler}></input>
            <button className="bg-primary" onClick={clickHandler}>Add</button>

            <div class="table-responsive">
                <table class="table table-primary table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map( (elem) => {
                                return(
                                <tr key={elem.sno}>
                                    <td> {elem.sno}</td>
                                    <td>{elem.details}</td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            

        </div>
     );
}
 
export default TodoList;