// import React from "react";
// import { HashLoader } from "react-spinners";
// const Loader = () => {
//     return (
//         <>
//            <div className="loader">
//            <HashLoader
//                 color="#ffdb73"
//                 cssOverride={{}}
//                 loading
//                 size={100}
//             />
//            </div>
//         </>
//     )
// }
// export default Loader;




import React from "react";
import { HashLoader } from "react-spinners";

const Loader = () => {
    return (
        <div style={styles}>
            <HashLoader
                color="#ffdb73"
                cssOverride={{}}
                loading
                size={100}
            />
        </div>
    );
}

const styles = {
    
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",  // Full viewport height
        width: "100vw",   // Full viewport width
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,     // Ensures loader is above other content
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional, light overlay background
    
};

export default Loader;
