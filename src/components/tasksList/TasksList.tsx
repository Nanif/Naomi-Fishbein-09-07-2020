import React from 'react';
import TasksItem from '../tasksItem/TasksItem'
import Task from "../../Models/tasks.model";
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

// import ButtonGroup from "react-bootstrap/ButtonGroup";


function initialTasks() {
    let tasksList: Task[] = [];
    tasksList.push(new Task('לתכנן database', '123', 'נעמי', '09/07/2020', 1))
    return tasksList
}

function TasksList() {
    const [tasks, setTasks] = React.useState(initialTasks);
    // const [task, setTask] = React.useState();
    // useEffect(async () => {
    //     const result = await axios(
    //         'https://hn.algolia.com/api/v1/search?query=redux',
    //     );
    //
    //     setData(result.data);
    // });
    const addTask = () => {
        setTasks(tasks.concat(new Task('', '', '', '', 3)));
    }
    const viewTask = (taskId: number) => {
    }

    const deleteTask = (taskId: number) => {
        debugger
        let index = tasks.findIndex(({id}) => id === taskId);
        tasks.splice(index, 1);
        setTasks([...tasks])
    }
    const editTask = (task: Task) => {
        let index = tasks.findIndex(({id}) => id === task.id);
        tasks[index] = task
        setTasks([...tasks])
    }

    return <div>
        <Button variant="success" onClick={addTask}>הוספת משימה</Button>
        <Container>
            {
                tasks.map((task, idx) =>
                    <div>
                        <TasksItem task={task} key={idx} deleteTask={deleteTask}
                                   editTask={editTask} viewTask={viewTask}></TasksItem>
                    </div>
                )
            }
        </Container>
    </div>;
}


export default TasksList;
