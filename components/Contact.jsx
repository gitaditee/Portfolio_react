import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FcAddressBook } from "react-icons/fc";
import { FcLandscape } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {
  const notifySuccess = () => toast.success("Email Sent !");
  const onSubmit=async(event) => {
    event.preventDefault();
    notifySuccess();
    const formData = new FormData(event.target);

    formData.append("access_key", "1633e20d-f99e-41cf-9f20-b397ffc44500");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  
  return (
  <>
  <p class="fs-1">
    Contact Me
  </p>
  <h1>
    Let's work together, Drop me a Line.
  </h1>
  <Container>
    <Row>

      <Col xs={6} md={4}>
    <p>  <FcAddressBook />     Email Address-aditeesingh03@gmail.com</p>  
       <p> <FcLandscape />     Address-Ajmer, Rajasthan</p>
      </Col>
      <Col xs={6} md={8}>

    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="xyz" name="name " />
      </Form.Group>
      <Form.Group className="mb-3" name="email" controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name="email" />
      </Form.Group>
      <Form.Group className="mb-3" name="message" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} name="message"/>
        <Button variant="outline-warning" type='submit' className='mt-3'>Submit</Button>  
      </Form.Group>
      <ToastContainer />   
    </Form>
    </Col>
    </Row>
    </Container>
    </>
  );
}

export default Contact;