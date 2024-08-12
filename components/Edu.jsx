import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Edu(){
    const data=[{
        id:1,
        image:'./images/gweca.png',
        title:'Govt. Womens Engineering College , Ajmer',
        author:'Information Technology',
        date:'2021-2025',
        tags:['cgpa- 9.35']
    },{
        id:2,
        image:'./images/sfs.png',
        title:'St. Francis Sr. Sec. School , Ajmer',
        author:'Senior Secondary Education & Secondary Education',
        date:'2016-2021',
        tags:['12 cgpa- 8.9','10 cgpa-8.1']
    }]
    return(
        <>


    <Row xs={1} md={2} className="g-4">
    {data.map((item) => (
        <Col key={item.id}>
          <Card className='ms-5'>
            <Card.Img variant="top" src={item.image}  />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.author}<br />
                {item.date}<br />
                {item.tags.join(', ')}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  

        </>
    )
}
export default Edu;
