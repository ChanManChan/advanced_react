import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import useInterval from './useInterval'

const useStyles = makeStyles({
    container: {
        display: 'grid',
        gridColumnGap: '10px',
        gridRowGap: '15px',
        gridTemplateColumns: '2fr 2fr 2fr',
        margin: '30px',
    },
});

const getFieldElements = (_fields) => 
            _fields.map((field, index) => 
                    <TextField key={index} id={field} label={field} variant="outlined" color="secondary"/>
                    )


const DynamicForm = ({ labels, isExtendedForm }) => {

const [fields, setFields] = React.useState(labels);
const [fieldElements, setFieldElements] = React.useState(getFieldElements(labels));
const [key, setKey] = React.useState('')


const containerRef = React.useRef(null)

React.useEffect(()=>{
    const root = document.getElementById('root')
    root.addEventListener('keyup', (e) => {
        setKey(e.code)
    })
    return () => {
        const root = document.getElementById('root')
        root.removeEventListener('keyup')
    }
}, [])

React.useEffect(()=>{
    if(isExtendedForm || fields.length < 4)
        setFieldElements(getFieldElements(fields));
    else
        setFieldElements(getFieldElements(fields.slice(0, 3)))
}, [isExtendedForm, fields])


// useInterval(() => {
//     setFields([...fields, 'New_Field'])
// }, 3000)

const handleNewField = (_fields) => {
    setFields([..._fields, 'New_field'])
}
    

const getHeight= () => {
    if(containerRef && containerRef.current)
        return "Height: " + containerRef.current.offsetHeight + " Width: " + containerRef.current.offsetWidth;
    else return ''
}

    const classes = useStyles();

    return (
        <>
            <div ref={containerRef} className={classes.container}>
               { fieldElements }
            </div>
                <div>{getHeight()}</div> 
                <div>Key: {key}</div> 
            <Fab onClick={()=> handleNewField(fields)} color="secondary" aria-label="add">
                <AddIcon />
            </Fab>
        </>
    );
};

DynamicForm.propTypes = {
    labels: PropTypes.array,
};

export default DynamicForm;
