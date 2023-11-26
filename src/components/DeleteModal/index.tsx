import { Button, Container, Flex, Heading } from '@radix-ui/themes'
import React from 'react'


interface ModalProps {
    setOpen: any;
    handleConfirmDelete: any;
    index: number,
    open: object
}

const DeleteModal: React.FC<ModalProps> = ({ setOpen, open, handleConfirmDelete, index }) => {
    return (
        <Container style={{ width: '100%', height: '100vh', position: 'fixed', left: '0', background: 'rgb(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '10' }}>
            <div style={{ background: 'white', padding: '50px', borderRadius: '10px', display: 'flex', flexDirection: 'column', width: '60%', margin: '0 auto', gap: '10px' }}>
                <Heading style={{ marginBottom: '20px' }}>Are you sure you want to delete this record?</Heading>
                <Flex gap="3" justify="end" style={{ marginTop: '20px' }}>
                    <Button onClick={()=>handleConfirmDelete(index)}>Delete</Button>
                    <Button variant="soft" onClick={() => setOpen({ ...open, deleteModal: false })}>Cancel</Button>
                </Flex>
            </div>
        </Container>
    )
}

export default DeleteModal