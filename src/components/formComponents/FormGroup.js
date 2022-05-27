import React from 'react'
import { Form } from 'react-bootstrap'

const FormGroup = ({ide, lab, ty, refer}) => {
    return (
        <Form.Group id={ide}>
            <Form.Label> {lab} </Form.Label>
            <Form.Control type={ty} ref={refer} required />
        </Form.Group>
    )
}

export default FormGroup