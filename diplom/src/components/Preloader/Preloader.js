import React, { Component } from 'react'
import './Preloader.css'



// const Preloader = () => {

//     const [preloader, setPreloader] = useState(false)

//     function addClassToPreloader() {
//         setPreloader(true)
//     }

//     useEffect(() => {
//         addClassToPreloader()
//         return function cleanup() {
//             setPreloader(false)
//         }
//     })

//     const isPreloaderActive = (
//         `${preloader ? 'preloader_invisible' : ''}`
//     )

//     return (
//         <div ref={this.viewRef} className="preloader">
//             <div className="preloader__container">
//                 <span className="preloader__round"></span>
//             </div>
//         </div>
//     )
// };


export default class Preloader extends Component{
    constructor(props){
        super(props);
        this.viewRef = React.createRef();
    }
    render(){
        return (
            <div ref={this.viewRef} className="preloader">
                <div className="preloader__container">
                    <span className="preloader__round"></span>
                </div>
            </div>
        );
    }

    componentWillUnmount(){
       this.viewRef.current.style.opacity = 0;
    }
}
