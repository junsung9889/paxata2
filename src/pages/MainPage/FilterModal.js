import { Modal, Button } from 'react-bootstrap';
import { useState ,useEffect} from 'react';
import { Form, FormControl } from 'react-bootstrap';
import {useForm} from 'react-hook-form';

function SearchOptions({options,setOptions,index}){
    const {register, getValues} = useForm();
    
    const onChange = ()=>{
      const copiedOptions = options.slice();
      copiedOptions[index] = getValues();
      setOptions(copiedOptions);
    };

    return(
      <Form style={{display:'flex'}} onChange = {onChange}>
        <Form.Select aria-label="Default select example" {...register('first')}>
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Select aria-label="Default select example" {...register('second')}>
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Select aria-label="Default select example" {...register('third')}>
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </Form.Select>
      </Form>
    );
}

export default function FilterModal(props) {
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState([]);
  const [options,setOptions] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onClick = () => {
      console.log(options);
  };

  function clickAdd(){
    setFilter(filter.concat(''));
    setOptions(options.concat({}));
  }

  return (
    <>
      <Button variant="warning" onClick={handleShow} className ='filter-btn'>
        Filter
      </Button>

      <Modal show={show} onHide={handleClose} backdrop={'static'}>
        <Modal.Header closeButton>
          <Modal.Title>Filter Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                {
                  filter.map((s,index) => <SearchOptions options = {options} setOptions = {setOptions} index = {index}></SearchOptions>)
                }
            </Form>
            <div style={{display: 'flex'}}>
                <Button onClick={clickAdd} style={{marginLeft: 'auto'}}>+</Button>
            </div>
        </Modal.Body>
        <Modal.Footer>

          <Button variant="warning" onClick = {onClick}>
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
