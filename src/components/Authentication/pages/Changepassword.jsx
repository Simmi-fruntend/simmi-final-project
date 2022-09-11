
import { Box, Typography, TextField,Alert } from '@mui/material'
import {React,useState} from 'react'
import pic1 from '../Assets/pic1.png'
import pic2 from '../Assets/pic2.png'
import logo from '../Assets/logo.png'
import classes from '../css/ResetPassword.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Changepassword = () => {
    const [error,setError] = useState({
        status:false,
        msg:'',
        type:''
    })
    const navigate = useNavigate();
    const headers = {
        'Content-Type':'multipart/form-data',
        // Content-Type:'application/json',
        // 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('apitoken')
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email:localStorage.getItem('useremail'),
            password: data.get('password'),
            oldpassword: data.get('opassword'),
            cpassword: data.get('confirmPassword')

            
        }
    axios.post('http://127.0.0.1:8000/api/changepassword/', actualData , {headers}).then(res =>{
        console.log(res);
        setError({

            status:true,
            type:'success',
            msg:res.data.msg
           
        })
        setTimeout(() =>{
            localStorage.setItem('islogin', 'false');
            // Cookies.remove("islogin");
            // Cookies.set('islogin','false');
            localStorage.removeItem("id");
            localStorage.removeItem("useremail");
            // Cookies.remove("id");
            // setUserData(null);
            // e.refresh()
            navigate("/");
            window.location.reload(true);
            
            // console.log("logout");           
          
    },2000)
       
    }).catch(err =>{
        console.log(err);
        setError({
            status:true,
            msg:err.response.data.msg,
            type: 'error'
        })
    })
        
    }
  return (
    <Box component='div' className={classes.maindiv}>
    <Box component='div' className={classes.pic1div}>
        <img src={pic1} alt='cover' />
    </Box>
    <Box component='div' className={classes.childdiv}>
        <Box component='div' className={classes.logo}>
            <img src={logo} alt='logo' />
        </Box>
        <Box component='div' className={classes.title}>
            <Typography variant='h4' className={classes.titletypo}>
                Reset Password?
            </Typography>
        </Box>
        <Box component='div' className={classes.subtitle}>
            <Typography variant='h7' className={classes.subtitletypo}>
                Reset your password so you can have <br /> complete access to your account
            </Typography>
        </Box>
        <Box component='div' className={classes.subtitle}>
        {error.status ? <Alert severity={error.type}>{error.msg} </Alert> : ''}
        </Box>
        <Box component='form' id='reset-form' sx={{ mt: '56px' }} onSubmit={handleSubmit}>
            <Typography varient='h6' component='h5'>
                Old Password
            </Typography>
            <TextField required fullWidth id='opassword' name='opassword' label='Your old password' className={classes.textfield} type='password' sx={{ mt: 2, mb: 2, width: '512px' }} />
            <Typography varient='h6' component='h5'>
                Password
            </Typography>
            <TextField required fullWidth id='password' name='password' label='Your password' className={classes.textfield} type='password' sx={{ mt: 2, mb: 2, width: '512px' }} />
            <Typography varient='h6' component='h5' className={classes.formtypos}>
                Confirm Password
            </Typography>
            <TextField required fullWidth id='confirmPassword' name='confirmPassword' label='Confirm Password' className={classes.lasttextfield} type='password' sx={{ mt: 2, mb: 2, width: '512px' }} />
                <br/>
            <Box component='button' type='submit'  className={classes.submitButton}  sx={{mt:3}}>
                        <Typography className={classes.typoButton}> Proceed To Login </Typography>
                    </Box>
        </Box>


    </Box>
    <Box component='div' className={classes.pic2div}>
        <img src={pic2} alt='cover' sx={{ width: '500px', height: '500px' }} />
    </Box>


</Box>
  )
}

export default Changepassword