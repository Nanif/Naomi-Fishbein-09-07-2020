import React, {FC} from 'react';
import Task from "../../Models/tasks.model";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";


interface TaskProps {
    task: Task;
    // editTask: (event: any) => void;
    deleteTask: (taskId: number) => void;
    viewTask: (taskId: number) => void;
    editTask: (task: Task) => void;

}

const TasksItem: FC<TaskProps> = (props: TaskProps) => {
    const [disabled, setDisabled] = React.useState(true);

    const handleDeleteTask = () => {
        debugger
        props.deleteTask(props.task.id);
    }
    const handleViewTask = () => {
        props.viewTask(props.task.id);
    }
    const handleEditTask = () => {
        setDisabled(!disabled)
    }
    const setValue = (event: any) => {
        let name: string = event.target.name
        props.editTask({...props.task, [name]: event.target.value})
    }
    // @ts-ignore
    return <Row>
        <Col xs>
            <input disabled={(disabled) ? true : false} type="text" name={'creationDate'}
                   value={props.task.creationDate} onInput={setValue}/>
        </Col>
        <Col xs>
            <input disabled={(disabled) ? true : false} type="text" name={'creatorName'} value={props.task.creatorName}
                   onInput={setValue}/>
        </Col>
        <Col xs>
            <input disabled={(disabled) ? true : false} type="text" name={'description'} value={props.task.description}
                   onInput={setValue}/>
        </Col>

        <ButtonGroup aria-label="Basic example">
            <Button variant="outline-success" onClick={handleDeleteTask}>מחיקה</Button>
            <Button variant="outline-success" onClick={handleEditTask}>עריכה</Button>
            <Button variant="outline-success" onClick={handleViewTask}>צפייה</Button>
        </ButtonGroup>
    </Row>


}

export default TasksItem
