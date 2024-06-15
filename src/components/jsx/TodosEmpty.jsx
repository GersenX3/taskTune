import { Engines } from '../svg/Engines';
import '../css/TodosEmpty.css';

function TodosEmpty() {
    return (
        <div className="container">
            <p>Create the task you need!!</p>
            <div className="engines">
                <Engines />
            </div>
        </div>
    );
}
export { TodosEmpty };
