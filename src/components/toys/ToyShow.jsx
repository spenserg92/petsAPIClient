import {Card, Button, CardHeader, CardBody, CardFooter} from 'react-bootstrap'

const ToyShow = (props) => {
    const { toy } = props

    const setBgCondition = (cond) => {
        // a toy can be new, used, or disgusting
        if (cond === "new"){
            return ({width: '18rem', backgroundColor: '#b5ead7'})
        } else if (cond === "used"){
            return ({width: '18rem', backgroundColor: '#ffdac1'})
        } else {
            return ({width: '18rem', backgroundColor: '#ff9aa2'})
        }
    }

    return (
        <>
            <Card className='m-2' style={setBgCondition(toy.condition)}>
                <CardHeader>{toy.name}</CardHeader>
                <CardBody>
                    <small>{toy.description}</small><br />
                    <small>{toy.isSqueaky ? 'squeak squeak' : 'stoic silence'}</small>
                    
                </CardBody>
                <CardFooter>
                    <small>Condition: {toy.condition}</small>
                </CardFooter>

            </Card> 
        </>
    )
}

export default ToyShow