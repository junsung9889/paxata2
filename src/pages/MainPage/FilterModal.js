import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';


function SearchOptions(){
    function handleCategory(){

    }

    function handleGL(){

    }

    function handleValue(){

    }

    return(
      <Form.Group>
          Form place
      </Form.Group>
    );
}


export default function FilterModal(props) {
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState([]);

  let key = 0;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {data} = props;
  const {setData} = props;
  const {filterOpt} = props;

  function clickAdd(){
    setFilter(filter.concat({'key': key, 'category': '', 'gl': '', 'value': 0}));
    console.log(filter);
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
                {filter.map((f) =>
                <SearchOptions key={f.key}/>)}
            </Form>
            <div style={{display: 'flex'}}>
                <Button onClick={clickAdd} style={{marginLeft: 'auto'}}>+</Button>
            </div>
        </Modal.Body>
        <Modal.Footer>

          <Button variant="warning" onClick={handleClose}>
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
