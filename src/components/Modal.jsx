import classes from './Modal.module.css'

function Modal({ children, onClose }) {
    return (
        <>
            <div className={classes.backdrop} onClick={onClose}/>
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