import Button from "./Button/Button.jsx";
import {useState, useRef} from "react";

function StateVsRef() {
    const input = useRef();
    const [inputValue, setInputValue] = useState(false);
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            setInputValue(true)
        }
    }

    console.log(input)
    debugger

    return (
        <div>
            <h3>Input Value: {inputValue && input.current?.value}</h3>
            <input
                type="text"
                ref={input}
                onKeyDown={handleKeyDown}
                className='control'
            />
        </div>
    )
}

export default function FeedbackSection() {
    const [form, setForm] = useState({
        name: '',
        hasError: true,
        reason: 'help',
    })

    function handleNameChange(event) {
        setForm((prev) =>
            ({
                ...prev,
                name: event.target.value,
                hasError: event.target.value.trim().length === 0
            })
        )
    }

    return (
        <section>
            <h3>Обратная связь</h3>
            <form style={{marginBottom: '1rem'}}>
                <label htmlFor="name">Ваше имя:</label>
                <input
                    type="text"
                    id="name"
                    className="control"
                    value={form.name}
                    onChange={handleNameChange}
                    style={{border: form.hasError ? '1px solid red' : null}}
                />

                <label htmlFor="reason">Причина обращения:</label>
                <select id="reason" className="control" value={form.reason}
                        onChange={event =>
                            setForm(prev => ({...prev, reason: event.target.value}))}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                {/*<pre>{JSON.stringify(form, null, 4)}</pre>*/}

                <Button disabled={form.hasError} isActive={!form.hasError}> Отправить </Button>
            </form>
            <hr style={{marginBottom: '1rem'}} />
            <StateVsRef />
        </section>
    )
}