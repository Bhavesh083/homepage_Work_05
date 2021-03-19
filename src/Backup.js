import React,{useState,useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import { accAdd } from './action/formaction'

//styles:- 
import './styles/Main.css';
import './styles/disp.css';
import './styles/HomeComponent-new.css';
import './styles/ModalForm.css';

 


function Signup() { 


    const [comp, setComp] = useState(true);

    const [oneinp, setOneinp] = useState(false);const [twoinp, setTwoinp] = useState(false);const [threeinp, setThreeinp] = useState(false);
    const [onButton, setOnButton] = useState(false);
    const [seconeinp, setSeconeinp] = useState(false);const [sectwoinp, setSectwoinp] = useState(false);const [secthreeinp, setSecthreeinp] = useState(false);const [secfourinp, setSecfourinp] = useState(false);
    const [onsecButton, setOnsecButton] = useState(false);

    //for password peek
    const [passwordshown, setPasswordshown] = useState(false);

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
     
    //      Form dfn :-
    const {register,handleSubmit,errors,formState:{isDirty} } = useForm();
    const {register:register2,handleSubmit:handleSubmit2,errors:errors2} = useForm();
    
    //      Getting form details :-
    const onSubmit = (data) => {
        console.log(data);
        dispatch(accAdd(data.fullname,data.email,data.password));
        setComp(false);
    }

    const onSubmitDetails = (det) => {
        console.log(det);
    }
    
    // Back button operation :-
    const goBack = () =>{
        setComp(true);
    }

    //////  front form display button function :-
    const buttonOn1 = (e) =>{ if (e.target.value.length > 1 ) { setOneinp(true);}else if (e.target.value.length <= 0 ) {setOneinp(false);} }
    const buttonOn2 = (e) =>{if (e.target.value.length > 3 ) { setTwoinp(true);}else if (e.target.value.length <= 2 ) {setTwoinp(false);}}
    const buttonOn3 = (e) =>{if (e.target.value.length > 7 ) {setThreeinp(true);}else if (e.target.value.length <= 6 ) {setThreeinp(false); }}
    useEffect(() => {if (oneinp === true && twoinp === true && threeinp === true) {setOnButton(true);}else{setOnButton(false);}},[twoinp,oneinp,threeinp])

    //////   second form display button function :-
    const secbuttonOn1 = (e) =>{ if (e.target.value.length > 1 ) { setSeconeinp(true);}else if (e.target.value.length <= 0 ) {setSeconeinp(false);} }
    const secbuttonOn2 = (e) =>{if (e.target.value.length > 1 ) { setSectwoinp(true);}else if (e.target.value.length <= 0 ) {setSectwoinp(false);}}
    const secbuttonOn3 = (e) =>{if (e.target.value.length > 1 ) {setSecthreeinp(true);}else if (e.target.value.length <= 0 ) {setSecthreeinp(false); }}
    const secbuttonOn4 = (e) =>{if (e.target.value.length > 1 ) {setSecfourinp(true);}else if (e.target.value.length <= 0 ) {setSecfourinp(false); }}
    useEffect(() => {if (seconeinp === true && sectwoinp === true && secthreeinp === true && secfourinp === true) {setOnsecButton(true);}else{setOnsecButton(false);}},[sectwoinp,seconeinp,secthreeinp,secfourinp])
    
    
    //////code for show password:-
    const showPas = () =>{
        setPasswordshown(!passwordshown);
    }
   
 
    return (    
    
   <div>     
    { comp ? ///// Front Page:-
    <div className='main-root-one  main'>
        <div className='m-root-main'>
           <div className='rad-main-box  m-s-box1'>
               <div className='mp-main-one-box md-p md-p-sp  md-p-fs'>
                    <div className='main-box'>
                        <div className='left-sec'>
                            <img alt='icon-company' src='https://raw.githubusercontent.com/Bhavesh083/SignIn_Work_04/c762b8b2d187a1321ea6b5cfe7cc60b2fd47e9c9/src/images/modal-logo.svg' /> 
                            <div className='left-content'>
                                <p className='left-content-welcome'>Welcome Back</p>
                                <p className='left-content-signin'>Sign in to continue</p>
                            </div>
                        </div>
                        <div className='right-sec'>
                             <svg  className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                             <path d="M18.3 5.71a.9959.9959 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
                             </svg>
                            <div> 
                            <div className='right-sec-main-content'>
                                    <div className='r-s-google'>
                                    <img alt='google-icon' src='https://github.com/Bhavesh083/SignIn_Work_04/blob/main/src/images/Google-logo.png?raw=true'/>
                                    <p>Continue with Google</p>
                                    </div>
                                    <div className='sec-seperator'>
                                    <hr></hr>
                                    <p>or</p>
                                    <hr></hr>
                                    </div>
                                    <div className='right-form'>
                                        <form className='right-form-body' onSubmit={handleSubmit(onSubmit)} >
                                             <label>Your Full Name</label>
                                             <input value={user.fullname} onChange={(e)=>buttonOn1(e)} name='fullname' placeholder='Enter Your Full Name' type='text'  ref={register({required:true})} />
                                             {errors.fullname && <p className='modal__errors'>
                                                 <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 Full Name is required</p>}
                                             <label>Your Email Address</label>
                                             <input value={user.email} onChange={(e)=>buttonOn2(e)}  name='email' placeholder='Enter Email Address' type='email'  ref={register({required:true})}   />
                                             {errors.email && <p className='modal__errors'>
                                                 <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 Email is required
                                             </p>}
                                             <label>Password</label>
                                             <input value={user.password} onChange={(e)=>buttonOn3(e)}  name='password'  placeholder='Enter Password' type={passwordshown ? 'text' : 'password'}  ref={register({required:true,
                                                pattern : { 
                                                value : /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).{8,}$/ ,
                                                message: "Your password must have at least one of each of the following: uppercase character (A-Z), lowercase character (a-z), digit (0-9), and symbol (any non-alphanumeric character)", 
                                            } 
                                            })} />
                                             <svg onClick={showPas}  className="MuiSvgIcon-root visiblity" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                               { passwordshown ?
                                               <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                                            :  <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path>
                                             }</svg>
                                             {errors.password?.type === "pattern" && <p className='modal__errors dec-pad'> 
                                                 <svg className="MuiSvgIcon-root " focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 {errors.password.message}  
                                             </p>}
                                             {errors.password?.type=== "required" && <p className='modal__errors dec-pad'>
                                                 <svg className="MuiSvgIcon-root " focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 Please enter your password
                                             </p>}
                                             {onButton? <button className='r-f-b-button'>Next</button>:<button className='disabled'>Next</button>}
                                        </form>
                                    </div>
                                </div>
                                <div className='info-box-body'>
                                 <hr></hr>
                                 <p>By signing up, you're agreeing to our <span> Terms of Use </span></p>
                                 <p>Already have an account? <span> Log In </span></p>
                                </div> 
                          </div>
                        </div>
                    </div>
               </div>
            </div> 
        </div>
    </div> 


    :        ///// Second PAGE :-

 
    <div className='main-root-one  main'>
        <div className='m-root-main'>
           <div className='rad-main-box  m-s-box1'>
               <div className='mp-main-one-box md-p md-p-sp  md-p-fs'>
                    <div className='main-box'>
                        <div className='left-sec'>
                            <img alt='icon-company' src='https://raw.githubusercontent.com/Bhavesh083/SignIn_Work_04/c762b8b2d187a1321ea6b5cfe7cc60b2fd47e9c9/src/images/modal-logo.svg' /> 
                            <div className='left-content'>
                                <p className='left-content-welcome'>Welcome Back</p>
                                <p className='left-content-signin'>Sign in to continue</p>
                            </div>
                        </div>
                        <div className='right-sec'>
                             <svg  className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                             <path d="M18.3 5.71a.9959.9959 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
                             </svg>
                             <div className='modal__content3'>
                                <form className='modal__form form2' onSubmit={handleSubmit2(onSubmitDetails)}>
                                    <label className='newLabel'>College</label>
                                    <input onChange={(e)=>secbuttonOn1(e)} className='college_field' placeholder='Enter Colege Name' type='text' name='college' ref={register2({required:true})} />
                                    {errors2.college && <p className='modal__errors'>
                                                 <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 College Name is required</p>}
                                    <div className='yearDegree'>
                                        <div>
                                            <label className='newLabel'>Graduation Year</label>
                                            <select onChange={(e)=>secbuttonOn2(e)} name='date' className='signupDropdown2' type='text'  ref={register2({required:true})}>
                                                <option className='option__heading' value='' hidden>Select Graduation Year</option>
                                                <option className='signupOption' value='Fall 2024'>Fall 2024</option>
                                                <option className='signupOption' value='Spring 2024'>Spring 2024</option>
                                                <option className='signupOption' value='Fall 2023'>Fall 2023</option>
                                                <option className='signupOption' value='Spring 2023'>Spring 2023</option>
                                                <option className='signupOption' value='Fall 2022'>Fall 2022</option>
                                                <option className='signupOption' value='Spring 2022'>Spring 2022</option>
                                                <option className='signupOption' value='Fall 2021'>Fall 2021</option>
                                                <option className='signupOption' value='Spring 2021'>Spring 2021</option>
                                                <option className='signupOption' value='Fall 2020'>Fall 2020</option>
                                                <option className='signupOption' value='Spring 2020'>Spring 2020</option>
                                                <option className='signupOption' value=' 2019'>2019</option>
                                                <option className='signupOption' value=' 2018'>2018</option>
                                            </select>
                                            {errors2.date && <p className='modal__errors'>
                                                 <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 Graduation Date is required</p>}
                                        </div> 
                                        <div className='degreeContainer'>
                                            <label className='newLabel'>Degree</label>
                                            <select onChange={(e)=>secbuttonOn3(e)}  className='Degree' placeholder='Enter Degree Name' type='text' name='degree' ref={register2({required:true})}  > 
                                                <option className='option__heading' value='' hidden>Select Degree Name</option>
                                                <option className='signupOption' value='BTech'>BTech</option>
                                                <option className='signupOption' value='BSc'>BSc</option>
                                                <option className='signupOption' value='BBA'>BBA</option>
                                                <option className='signupOption' value='BA'>BA</option>
                                                <option className='signupOption' value='Bcom'>Bcom</option>
                                                <option className='signupOption' value='BCA'>BCA</option>
                                                <option className='signupOption' value='BFA'>BFA</option>
                                                <option className='signupOption' value='BE'>BE</option>
                                            </select>
                                            {errors2.degree && <p className='modal__errors'>
                                                 <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 Degree is required</p>}
                                        </div>
                                    </div> 
                                    <label className='newLabel'>Major</label>
                                    <input onChange={(e)=>secbuttonOn4(e)} placeholder='Enter Major Name' type="text" name='major' ref={register2({required:true})} />
                                    {errors2.major && <p className='modal__errors'>
                                                 <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 Major is required</p>}
                                    <div className="buttons">
                                        <button onClick={()=>goBack()} className='signupButton2' type='button'>Back</button>
                                        {onsecButton? <button className='signupButton'>Signup</button>:<button className='disignupButton'>Signup</button>}
                                    </div>
                                </form>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>                
        </div>
    </div>
     }
 </div>


    )
}

export default Signup;
                                        import React,{useState,useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import { accAdd } from './action/formaction'

//styles:- 
import './styles/Main.css';
import './styles/disp.css';
import './styles/HomeComponent-new.css';
import './styles/ModalForm.css';

 


function Signup() { 


    const [comp, setComp] = useState(true);

    const [oneinp, setOneinp] = useState(false);const [twoinp, setTwoinp] = useState(false);const [threeinp, setThreeinp] = useState(false);
    const [onButton, setOnButton] = useState(false);
    const [seconeinp, setSeconeinp] = useState(false);const [sectwoinp, setSectwoinp] = useState(false);const [secthreeinp, setSecthreeinp] = useState(false);const [secfourinp, setSecfourinp] = useState(false);
    const [onsecButton, setOnsecButton] = useState(false);

    //for password peek
    const [passwordshown, setPasswordshown] = useState(false);

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
     
    //      Form dfn :-
    const {register,handleSubmit,errors,formState:{isDirty} } = useForm();
    const {register:register2,handleSubmit:handleSubmit2,errors:errors2} = useForm();
    
    //      Getting form details :-
    const onSubmit = (data) => {
        console.log(data);
        dispatch(accAdd(data.fullname,data.email,data.password));
        setComp(false);
    }

    const onSubmitDetails = (det) => {
        console.log(det);
    }
    
    // Back button operation :-
    const goBack = () =>{
        setComp(true);
    }

    //////  front form display button function :-
    const buttonOn1 = (e) =>{ if (e.target.value.length > 1 ) { setOneinp(true);}else if (e.target.value.length <= 0 ) {setOneinp(false);} }
    const buttonOn2 = (e) =>{if (e.target.value.length > 3 ) { setTwoinp(true);}else if (e.target.value.length <= 2 ) {setTwoinp(false);}}
    const buttonOn3 = (e) =>{if (e.target.value.length > 7 ) {setThreeinp(true);}else if (e.target.value.length <= 6 ) {setThreeinp(false); }}
    useEffect(() => {if (oneinp === true && twoinp === true && threeinp === true) {setOnButton(true);}else{setOnButton(false);}},[twoinp,oneinp,threeinp])

    //////   second form display button function :-
    const secbuttonOn1 = (e) =>{ if (e.target.value.length > 1 ) { setSeconeinp(true);}else if (e.target.value.length <= 0 ) {setSeconeinp(false);} }
    const secbuttonOn2 = (e) =>{if (e.target.value.length > 1 ) { setSectwoinp(true);}else if (e.target.value.length <= 0 ) {setSectwoinp(false);}}
    const secbuttonOn3 = (e) =>{if (e.target.value.length > 1 ) {setSecthreeinp(true);}else if (e.target.value.length <= 0 ) {setSecthreeinp(false); }}
    const secbuttonOn4 = (e) =>{if (e.target.value.length > 1 ) {setSecfourinp(true);}else if (e.target.value.length <= 0 ) {setSecfourinp(false); }}
    useEffect(() => {if (seconeinp === true && sectwoinp === true && secthreeinp === true && secfourinp === true) {setOnsecButton(true);}else{setOnsecButton(false);}},[sectwoinp,seconeinp,secthreeinp,secfourinp])
    
    
    //////code for show password:-
    const showPas = () =>{
        setPasswordshown(!passwordshown);
    }
   
 
    return (    
    
   <div>     
    { comp ? ///// Front Page:-
    <div className='main-root-one  main'>
        <div className='m-root-main'>
           <div className='rad-main-box  m-s-box1'>
               <div className='mp-main-one-box md-p md-p-sp  md-p-fs'>
                    <div className='main-box'>
                        <div className='left-sec'>
                            <img alt='icon-company' src='https://raw.githubusercontent.com/Bhavesh083/SignIn_Work_04/c762b8b2d187a1321ea6b5cfe7cc60b2fd47e9c9/src/images/modal-logo.svg' /> 
                            <div className='left-content'>
                                <p className='left-content-welcome'>Welcome Back</p>
                                <p className='left-content-signin'>Sign in to continue</p>
                            </div>
                        </div>
                        <div className='right-sec'>
                             <svg  className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                             <path d="M18.3 5.71a.9959.9959 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
                             </svg>
                            <div> 
                            <div className='right-sec-main-content'>
                                    <div className='r-s-google'>
                                    <img alt='google-icon' src='https://github.com/Bhavesh083/SignIn_Work_04/blob/main/src/images/Google-logo.png?raw=true'/>
                                    <p>Continue with Google</p>
                                    </div>
                                    <div className='sec-seperator'>
                                    <hr></hr>
                                    <p>or</p>
                                    <hr></hr>
                                    </div>
                                    <div className='right-form'>
                                        <form className='right-form-body' onSubmit={handleSubmit(onSubmit)} >
                                             <label>Your Full Name</label>
                                             <input value={user.fullname} onChange={(e)=>buttonOn1(e)} name='fullname' placeholder='Enter Your Full Name' type='text'  ref={register({required:true})} />
                                             {errors.fullname && <p className='modal__errors'>
                                                 <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 Full Name is required</p>}
                                             <label>Your Email Address</label>
                                             <input value={user.email} onChange={(e)=>buttonOn2(e)}  name='email' placeholder='Enter Email Address' type='email'  ref={register({required:true})}   />
                                             {errors.email && <p className='modal__errors'>
                                                 <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 Email is required
                                             </p>}
                                             <label>Password</label>
                                             <input value={user.password} onChange={(e)=>buttonOn3(e)}  name='password'  placeholder='Enter Password' type={passwordshown ? 'text' : 'password'}  ref={register({required:true,
                                                pattern : { 
                                                value : /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).{8,}$/ ,
                                                message: "Your password must have at least one of each of the following: uppercase character (A-Z), lowercase character (a-z), digit (0-9), and symbol (any non-alphanumeric character)", 
                                            } 
                                            })} />
                                             <svg onClick={showPas}  className="MuiSvgIcon-root visiblity" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                               { passwordshown ?
                                               <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                                            :  <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path>
                                             }</svg>
                                             {errors.password?.type === "pattern" && <p className='modal__errors dec-pad'> 
                                                 <svg className="MuiSvgIcon-root " focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 {errors.password.message}  
                                             </p>}
                                             {errors.password?.type=== "required" && <p className='modal__errors dec-pad'>
                                                 <svg className="MuiSvgIcon-root " focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 Please enter your password
                                             </p>}
                                             {onButton? <button className='r-f-b-button'>Next</button>:<button className='disabled'>Next</button>}
                                        </form>
                                    </div>
                                </div>
                                <div className='info-box-body'>
                                 <hr></hr>
                                 <p>By signing up, you're agreeing to our <span> Terms of Use </span></p>
                                 <p>Already have an account? <span> Log In </span></p>
                                </div> 
                          </div>
                        </div>
                    </div>
               </div>
            </div> 
        </div>
    </div> 


    :        ///// Second PAGE :-

 
    <div className='main-root-one  main'>
        <div className='m-root-main'>
           <div className='rad-main-box  m-s-box1'>
               <div className='mp-main-one-box md-p md-p-sp  md-p-fs'>
                    <div className='main-box'>
                        <div className='left-sec'>
                            <img alt='icon-company' src='https://raw.githubusercontent.com/Bhavesh083/SignIn_Work_04/c762b8b2d187a1321ea6b5cfe7cc60b2fd47e9c9/src/images/modal-logo.svg' /> 
                            <div className='left-content'>
                                <p className='left-content-welcome'>Welcome Back</p>
                                <p className='left-content-signin'>Sign in to continue</p>
                            </div>
                        </div>
                        <div className='right-sec'>
                             <svg  className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                             <path d="M18.3 5.71a.9959.9959 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
                             </svg>
                             <div className='modal__content3'>
                                <form className='modal__form form2' onSubmit={handleSubmit2(onSubmitDetails)}>
                                    <label className='newLabel'>College</label>
                                    <input onChange={(e)=>secbuttonOn1(e)} className='college_field' placeholder='Enter Colege Name' type='text' name='college' ref={register2({required:true})} />
                                    {errors2.college && <p className='modal__errors'>
                                                 <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 College Name is required</p>}
                                    <div className='yearDegree'>
                                        <div>
                                            <label className='newLabel'>Graduation Year</label>
                                            <select onChange={(e)=>secbuttonOn2(e)} name='date' className='signupDropdown2' type='text'  ref={register2({required:true})}>
                                                <option className='option__heading' value='' hidden>Select Graduation Year</option>
                                                <option className='signupOption' value='Fall 2024'>Fall 2024</option>
                                                <option className='signupOption' value='Spring 2024'>Spring 2024</option>
                                                <option className='signupOption' value='Fall 2023'>Fall 2023</option>
                                                <option className='signupOption' value='Spring 2023'>Spring 2023</option>
                                                <option className='signupOption' value='Fall 2022'>Fall 2022</option>
                                                <option className='signupOption' value='Spring 2022'>Spring 2022</option>
                                                <option className='signupOption' value='Fall 2021'>Fall 2021</option>
                                                <option className='signupOption' value='Spring 2021'>Spring 2021</option>
                                                <option className='signupOption' value='Fall 2020'>Fall 2020</option>
                                                <option className='signupOption' value='Spring 2020'>Spring 2020</option>
                                                <option className='signupOption' value=' 2019'>2019</option>
                                                <option className='signupOption' value=' 2018'>2018</option>
                                            </select>
                                            {errors2.date && <p className='modal__errors'>
                                                 <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 Graduation Date is required</p>}
                                        </div> 
                                        <div className='degreeContainer'>
                                            <label className='newLabel'>Degree</label>
                                            <select onChange={(e)=>secbuttonOn3(e)}  className='Degree' placeholder='Enter Degree Name' type='text' name='degree' ref={register2({required:true})}  > 
                                                <option className='option__heading' value='' hidden>Select Degree Name</option>
                                                <option className='signupOption' value='BTech'>BTech</option>
                                                <option className='signupOption' value='BSc'>BSc</option>
                                                <option className='signupOption' value='BBA'>BBA</option>
                                                <option className='signupOption' value='BA'>BA</option>
                                                <option className='signupOption' value='Bcom'>Bcom</option>
                                                <option className='signupOption' value='BCA'>BCA</option>
                                                <option className='signupOption' value='BFA'>BFA</option>
                                                <option className='signupOption' value='BE'>BE</option>
                                            </select>
                                            {errors2.degree && <p className='modal__errors'>
                                                 <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 Degree is required</p>}
                                        </div>
                                    </div> 
                                    <label className='newLabel'>Major</label>
                                    <input onChange={(e)=>secbuttonOn4(e)} placeholder='Enter Major Name' type="text" name='major' ref={register2({required:true})} />
                                    {errors2.major && <p className='modal__errors'>
                                                 <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 Major is required</p>}
                                    <div className="buttons">
                                        <button onClick={()=>goBack()} className='signupButton2' type='button'>Back</button>
                                        {onsecButton? <button className='signupButton'>Signup</button>:<button className='disignupButton'>Signup</button>}
                                    </div>
                                </form>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>                
        </div>
    </div>
     }
 </div>


    )
}

export default Signup;
                                        import React,{useState,useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import { accAdd } from './action/formaction'

//styles:- 
import './styles/Main.css';
import './styles/disp.css';
import './styles/HomeComponent-new.css';
import './styles/ModalForm.css';

 


function Signup() { 


    const [comp, setComp] = useState(true);

    const [oneinp, setOneinp] = useState(false);const [twoinp, setTwoinp] = useState(false);const [threeinp, setThreeinp] = useState(false);
    const [onButton, setOnButton] = useState(false);
    const [seconeinp, setSeconeinp] = useState(false);const [sectwoinp, setSectwoinp] = useState(false);const [secthreeinp, setSecthreeinp] = useState(false);const [secfourinp, setSecfourinp] = useState(false);
    const [onsecButton, setOnsecButton] = useState(false);

    //for password peek
    const [passwordshown, setPasswordshown] = useState(false);

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
     
    //      Form dfn :-
    const {register,handleSubmit,errors,formState:{isDirty} } = useForm();
    const {register:register2,handleSubmit:handleSubmit2,errors:errors2} = useForm();
    
    //      Getting form details :-
    const onSubmit = (data) => {
        console.log(data);
        dispatch(accAdd(data.fullname,data.email,data.password));
        setComp(false);
    }

    const onSubmitDetails = (det) => {
        console.log(det);
    }
    
    // Back button operation :-
    const goBack = () =>{
        setComp(true);
    }

    //////  front form display button function :-
    const bu
