// import React from "react";

export default function IntroSection() {
    return (<section style={{marginTop: "2rem"}}>
        <h1 className="centered" style={{ marginBottom: "1rem" }}>Result University</h1>
        <h3 className="centered" style={{color: "#666"}}>Университет frontend-разработки, который насыщает IT-сферу квалифицированными программистами </h3>
    </section>)
}

// export default function IntroSection() {
//     return React.createElement(
//         "section",
//         null,
//         [
//             React.createElement(
//                 'h1',
//                 {className: 'centered'},
//                 "Result University"),
//             React.createElement(
//                 "h3",
//                 {className: 'centered', style: {color: '#666'}},
//                 "Университет frontend-разработки, который насыщает" +
//                 " IT-сферу квалифицированными программистами",
//             )
//         ]
//     )
// }