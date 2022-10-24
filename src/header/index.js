import { useRef, useState } from "react";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";

export function Header(){
       const style=styles


    const click=(e)=>{

     const d=Array.from(setref.current.children)
     d.forEach(e=>{
        e.style.color="#28224B"
     })

       e.target.style.color="#35B8BE"
        }
    const [color,chengecolor] = useState("");
 const setref=useRef(null)


 
    return(
        <div>
        <header className={style.main}>
            <div className={style.div}>
               <p className={style.p}>We're open and available for takeaway & delivery.</p>
            <p className={style.p}>Order Now</p>           
           </div>    
        </header>
        <div className={style.basket}>
            <div className={style.svg}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="44" viewBox="0 0 40 44" fill="none">
<path d="M6.74532 32.9298C3.6855 29.1036 2.15108 24.8373 2.14205 20.131C2.14205 15.146 3.90213 10.8977 7.4223 7.38602C10.8881 3.96397 15.0761 2.21253 19.9865 2.13171C24.8875 2.18559 29.0846 3.93703 32.5777 7.38602C36.0979 10.8889 37.8579 15.1372 37.8579 20.131C37.8579 24.8463 36.3145 29.1126 33.2276 32.9298L26.3498 41.1211C26.3498 41.1211 25.2938 41.4444 24.7251 40.8517C24.4814 40.6092 14.8958 28.3762 14.8958 28.3762" stroke="#35B8BE" strokeWidth="5" strokeMiterlimit="3" strokeLinecap="square"/>
</svg></div>
        <div ref={setref}className={style.bsk}>
                <NavLink className={style.slr} onClick={click} to="/home">Home</NavLink>
                <NavLink className={style.slr} onClick={click} to="/Oreder">Order</NavLink>
                <NavLink className={style.slr} onClick={click} to="/Company">Company</NavLink>
                <NavLink className={style.slr} onClick={click} to="/Faq">FAQ</NavLink>
                <NavLink className={style.slr} onClick={click} to="/Contact">Contact</NavLink>
                <NavLink className={style.slr} onClick={click} to="/basket">bsa</NavLink>
         </div>
        </div>
 </div>
    )
        
    
}