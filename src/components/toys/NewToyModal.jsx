// this modal is rendered by the petShow component
// the state that controls this modal wheter its open or not will live in petShow
// the state and the updaterfunction assoc with that state is passed here as a prop from petShow

import React, {useState} from 'react'
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap'
import ToyForm from '../shared/ToyForm'
// if we want custom msgs import here
// we'll need an api call to make this modal work that'll be imported here

// we'll also need the same props for passing to the toyForm if they come from the parent
const NewToyModal = (props) => {
    const { pet, show, handleClose, msgAlert, triggerRefresh } = props
    // new piece of state, toy, initial value is an empty obj
    // we will build this object out, using our handleChange function
    const [toy, setToy] = useState({})

    const onChange = () => {
        console.log('on change')
    }
    const onSubmit = () => {
        console.log('on submit')
    }
    return (
        <Modal show={show} onHide={handleClose} >
            <ModalHeader closeButton />

            <ModalBody>
                <ToyForm
                    toy={toy}
                    handleChange={onChange}
                    handleSubmit={onSubmit}
                    heading={`${pet.name} a toy`}
                    />
            </ModalBody>
        </Modal>
    )
}

export default NewToyModal