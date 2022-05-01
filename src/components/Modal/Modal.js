import './Modal.css'

const Modal = ({children,closeModal,isOpen}) =>{

    const handleModalConteinerClick = e => e.stopPropagation();

    return(
        <article className={`modal ${isOpen && "isOpen"}`} onClick={closeModal}>
            <div className="modalConteiner" onClick={handleModalConteinerClick}>
                <button className="modalExit" onClick={closeModal}>X</button>
                {children}
            </div>
        </article>
    )
}

export default Modal