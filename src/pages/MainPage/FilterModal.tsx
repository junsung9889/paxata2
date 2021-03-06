import { Modal, Button, Form } from 'react-bootstrap';
import { useState ,useEffect} from 'react';
import {useForm} from 'react-hook-form';

function SearchOptions(props: any){
    const {register, getValues} = useForm();
    const {options,setOptions,index} = props;

    const onChange = ()=>{
      const copiedOptions = options.slice();
      copiedOptions[index] = getValues();
      setOptions(copiedOptions);
    };

    useEffect(() => {
        onChange();
    }, []);

    function clickDel() {
        let copiedOptions = options.slice();
        copiedOptions.splice(index, 1);
        setOptions(copiedOptions);
        console.log(options);
    }
    
    return(
        <>
      <Form.Group style={{display:'flex', justifyContent:'space-between'}} onChange = {onChange}>
        <Form.Select style = {{width:'28%'}} value={options[index].opt1} aria-label="Default select example" {...register('opt1')}>
          <option value=''>Select</option>
          <option value="version">Version</option>
          <option value="rowCount">Row</option>
        </Form.Select>
        <Form.Select style = {{width:'28%'}} value={options[index].opt2} aria-label="Default select example" {...register('opt2')}>
          <option value=''>Select</option>
            <option value=">=">{'>='}</option>
            <option value=">">{'>'}</option>
            <option value="==">{'=='}</option>
            <option value="<">{`<`}</option>
            <option value="<=">{`<=`}</option>
        </Form.Select>
        <Form.Control style = {{width:'30%'}} type='text' value={options[index].opt3||''} aria-label="Default select example" {...register('opt3')}>
        </Form.Control>
          <Button variant = 'outline-danger' style ={{width:'8%'}} onClick={() => clickDel()}>-</Button>
      </Form.Group>
            <br/>
        </>
    );
}

export default function FilterModal(props: any) {
  type Option = {opt1 : string, opt2: string, opt3: string}

  const [show, setShow] = useState(false);
  const [options,setOptions] = useState<Option[]>([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {filtered, setFiltered} = props;
  const {origin} = props;

  const onClick = () => {
      let copied: any[] = origin.concat();
      for(let option of options){
          const opt1 = option.opt1;
          const opt2 = option.opt2;
          const opt3 = option.opt3;
          switch(opt2){
              case ">=":
                  copied = copied.filter(a => a[opt1] >= parseInt(opt3));
                  break;
              case ">":
                  copied = copied.filter(a => a[opt1] > parseInt(opt3));
                  break;
              case "==":
                  copied = copied.filter(a => a[opt1] === parseInt(opt3));
                  break;
              case "<":
                  copied = copied.filter(a => a[opt1] < parseInt(opt3));
                  break;
              case "<=":
                  copied = copied.filter(a => a[opt1] <= parseInt(opt3));
                  break;
              default:
                  break;
          }
          setFiltered(copied);
      }
  };

  function clickAdd(){
    
    setOptions(options.concat({opt1 : '',opt2:'',opt3:''}));
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
                  options.map((s,index) => <SearchOptions key={index} options={options} setOptions={setOptions} index={index}></SearchOptions>)
                }
            </Form>
            <div style={{display: 'flex'}}>
                <Button variant = 'outline-primary'onClick={clickAdd} style={{marginLeft: 'auto'}}>+</Button>
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
