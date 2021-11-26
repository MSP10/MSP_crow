import React from 'react'
import {TextField, Divider} from '@mui/material'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import "../form.css"
import "../main.css"
import {storage} from '../firebase/index'
import {supabase} from '../client.js'
import DataBicker from './DataBicker'
import MultipleSelectCheckmarks from './List'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    'Software Engineering',
    'Artificial Intelligence',
    'Cyber Security',
    'Digital Multi media',
    'Bioinformatics' ,
    'Mainstream',
    'other',
 ];
 const commit = [
    'Hr',
    'Pr&Lr',
    'Media and graphic',
    'Game Development' ,
    'Data Science'  ,
    'Machine Learning ',
    'Flutter',
    'Android',
    'Web Development' ,
    'Cyber Security ',
    'Testing'
];
const Crow = () => {
    const [personName, setPersonName] = React.useState('');
    const [commit2, setCommit2] = React.useState('');
    const [department, setDepartment] = React.useState('');


    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a the stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    const handleChange2 = (event) => {
        const {
          target: { value },
        } = event;
        setCommit2(
          // On autofill we get a the stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
      const handleChangeDepart = (event) => {
        const {
          target: { value },
        } = event;
        setDepartment(
          // On autofill we get a the stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
    const [value, setValue] = React.useState(new Date());
    const [mode, setMode] = React.useState('dark');
    const theme = React.useMemo(
        () =>
          createTheme({
            palette: {
              mode,
            },
          }),
        [mode],
      );
  const [postData, setPostData] = React.useState({ name: '', phone: '',email:'', Committe1: '', Committe2: '', academicYear:'',college:'' });
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState('false');
  const [image,setImage] = React.useState('');

  const upload_image = (image) => {
        
    const storageRef = storage().ref(`images/${image.name}`);
    const task = storageRef.put(image);
    task.on('state_changed',
        (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
            console.log(error.message);
        },
        () => {
            task.snapshot.ref.getDownloadURL().then(downloadURL => {
                console.log('File available at', downloadURL);
                //add image url to firebase database
            });
        }
    );

}
const checkFieldsEmpty = () => {
  if(!image|| !postData.name || !postData.Committe2 || !postData.Committe1 || !postData.email || !postData.phone || !postData.academicYear || !postData.college){
    return false;
  }
  return true;
}

      const submitReqr=async()=>{
        setLoading(true);
        const { data, error } = await supabase
        .from('reqr')
        .insert([
          { name: postData.name, phone: postData.phone, email:postData.email, Committe1: personName, Committe2:commit2, department: department,academicYear:postData.academicYear,college:postData.college}
        ])
        if(data) {
          setPostData({...postData,  name: '', phone: '',email:'', Committe1: '', Committe2: '', academicYear:'',college:'' })
          setPersonName('')
          setCommit2('')
          setDepartment('')
          setLoading(false);
          setSuccess(true)
          document.getElementById("client").reset();
        }
        console.log(error)
      }
    return (
        <>
         <ThemeProvider theme={theme}>
        <main className="main">
            <div className="container">
                <section className="wrapper">
                <img src="/MSP FULL LOGO White.png" className="logo_image"/>

                    <form name="login" className="form" id="client" >
                        <h1 className="text-center main-h1">Recruitment Form</h1>
                    <Divider>Personal Data</Divider>
                        <div className="input-control perso">
                       
                            <TextField variant="outlined" type="text" label="Name*" style={{marginRight:'0.5em'}} onChange={(e) => setPostData({ ...postData, name: e.target.value })}/>

                        </div>
                        <div className="input-control">
                  <TextField variant="outlined" type="tel" style={{width: '100% !important'}} label="Phone*" onChange={(e) => setPostData({ ...postData, phone: e.target.value })}/>
                            
        
                        </div>
                   
                        <div className="input-control">
                  <TextField variant="outlined" type="email" style={{width: '100% !important'}} label="Email*" onChange={(e) => setPostData({ ...postData, email: e.target.value })}/>
                            
        
                        </div>
                    <Divider>Community Data</Divider>

                        <div className="input-control">
                       
                        <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="Committe1-multiple-checkbox-label">Committe1*</InputLabel>
                        <Select
                        labelId="Committe1-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Committe1*" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        
                        >
                        {commit.map((name) => (
                            <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                        
        
                        </div>
                        <div className="input-control">
                       
                        <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="Committe2-multiple-checkbox-label">Committe2*</InputLabel>
                        <Select
                        labelId="Committe2-multiple-checkbox-label"
                        id="Committe2-multiple-checkbox"
                        
                        value={commit2}
                        onChange={handleChange2}
                        input={<OutlinedInput label="Committe2*" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        
                        >
                        {commit.map((name) => (
                            <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                        
        
                        </div>
                        <Divider>College Data</Divider>
                        <div className="input-control">
                        <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="department-multiple-checkbox-label">Department*</InputLabel>
        <Select
          labelId="department-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          
          value={department}
          onChange={handleChangeDepart}
          input={<OutlinedInput label="Department*" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
         
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
                        </div>
                        <div className="input-control">  
                        <TextField variant="outlined" type="number" label="Academic year*" style={{marginRight:'0.5em'}} onChange={(e) => setPostData({ ...postData, academicYear: e.target.value })}/>
                        <TextField variant="outlined" type="text" label="college*" onChange={(e) => setPostData({ ...postData, college: e.target.value })}/>

                        </div>
                        {
                          !success ?<></>:    <Alert variant="filled" severity="success">
                          Thanks for submitting
                        </Alert>
                        }
                    
                        <div className="input-control" style={{justifyContent: 'center'}}>
                        <LoadingButton
                            
                          onClick={submitReqr}
                          loading={loading}
                          loadingPosition="start"
                          variant="contained"
                          style={{width: '90% !important', }}
                        >
                          Save
                        </LoadingButton>
                        </div>
                    </form>
              <Divider>
               
              </Divider>
              <p class="footer-heart" style={{color: 'white',marginTop: '1rem'}}>
                    Made BY <a href="https://twitter.com/Ataha352" style={{color: 'blue', }} >Ataha</a>
                    </p>
                </section>
            </div>
        </main>


        </ThemeProvider>
        </>
    )
}

export default Crow