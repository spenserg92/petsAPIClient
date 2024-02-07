// this modal is rendered by the petShow component
// the state that controls this modal wheter its open or not will live in petShow
// the state and the updaterfunction assoc with that state is passed here as a prop from petShow

import React, {useState} from 'react'
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap'
import ToyForm from '../shared/ToyForm'
// if we want custom msgs import here
import messages from '../shared/AutoDismissAlert/messages'
// we'll need an api call to make this modal work that'll be imported here
import { createToy } from '../../api/toy'

// we'll also need the same props for passing to the toyForm if they come from the parent

const NewToyModal = (props) => {
    const { pet, show, handleClose, msgAlert, triggerRefresh } = props
    // new piece of state, toy, initial value is an empty obj
    // we will build this object out, using our handleChange function
    const [toy, setToy] = useState({})

    const onChange = (e) => {
        e.persist()

        setToy(prevToy => {
            const updatedName = e.target.name
            let updatedValue = e.target.value

            if (updatedName === 'isSqueaky' && e.target.checked) {
                updatedValue = true
            } else if (updatedName === 'isSqueaky' && !e.target.checked) {
                updatedValue = false
            }

            const updatedToy = { [updatedName] : updatedValue }

            return {
                ...prevToy, ...updatedToy
            }
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        // console.log('this is the new toy to add', toy)
        // make our api call 
        createToy(pet, toy)
        // then close the modal 
        .then(() => handleClose())
        // notify user
        .then(() => {
            msgAlert({
                heading: "oh yeah!",
                message: messages.createToySuccess,
                variant: 'success'
            })
        })
        // refresh the parent page (component)
        .then(() => triggerRefresh())
        .then(() => setToy({}))
        // if error
        .catch(err => {
            msgAlert({
                heading: 'Oh no!',
                message: messages.generalError,
                variant: 'danger'
            })
        })
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