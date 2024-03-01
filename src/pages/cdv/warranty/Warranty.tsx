// Components
import Header from './Header'
import Text from './Text'
// BTS
import { Container, Row, Col } from 'react-bootstrap'
// Style
const sectionStyle = {
    color: "white",
    background: "linear-gradient(to top right, rgb(7 16 45), rgb(58 60 84))",
    padding: "20px",
    borderRadius: "20px",
    border: "1px solid rgb(84 90 106)",
}
const h2colStyle = 'd-flex flex-column align-items-center justify-content-center mb-4 mb-lg-0'
const hrStyle = 'd-block d-lg-none'
const detailColStyle = 'd-flex flex-column align-items-center justify-content-center '
const btnColStyle = 'd-flex justify-content-center mt-4'

const Warranty = () => (
    <section style={sectionStyle} id="warranty">
        <Container>
            <Row>

                <Col lg={6} className={h2colStyle}>
                    <Header />
                </Col>

                <hr className={hrStyle}/>


                <Col lg={6} className={detailColStyle}>
                    <Text />
                </Col>
                
                <Col className={btnColStyle}>
                    <button onClick={()=>{}}>
                        Hablemos!
                    </button>
                </Col>

            </Row>
        </Container>
    </section>
)
export default Warranty