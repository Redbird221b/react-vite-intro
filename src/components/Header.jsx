import logo from '/logo-name.svg'
import {useEffect, useState} from "react";
export default function Header() {
    const [now, setNow] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <header style={{position: "fixed", width: "100%"}}>
            <img src={logo} alt="logo" />
            {/*<h3>Result University</h3>*/}
            <span>Время: {now.toLocaleTimeString()}</span>
        </header>
    )
}