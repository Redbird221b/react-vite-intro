import Button from "./Button/Button.jsx";
import Modal from "./Modal/Modal.jsx";
import {useState} from "react";

export default function EffectSection() {
    const [modal, setModal] = useState(false);
    function openModal() {
        setModal(true);
    }
    return (
        <section>
            <h3>Эффекты</h3>
            <Button onClick={openModal}>Открыть информацию</Button>
            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do
                    Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do
                    Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do
                    Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do
                </p>
                <Button onClick={() => setModal(false)}>Закрыть</Button>
            </Modal>
        </section>
    )
}