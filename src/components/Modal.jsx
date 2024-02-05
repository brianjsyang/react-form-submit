import { useNavigate } from 'react-router-dom'; // for programmically navigate
import classes from './Modal.module.css'

function Modal({ children }) {
    // assunming that the Modal component is always used to wrap a page.
    const navigate = useNavigate();
    function closeHanlder() {
        navigate('..') // relative navigation, like terminal command OR navigate('/')
    }

    return (
        <>
            <div className={classes.backdrop} onClick={closeHanlder}/>
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    )
}

export default Modal;


// function Modal(props)
// paired with <dialog>{props.children}</dialog>

// OR use object destructuring.
// function Modal({children})
// paired with <dialog>{children}</dialog>