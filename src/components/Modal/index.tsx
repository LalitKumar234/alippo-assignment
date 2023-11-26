import { Button, Container, Flex, Heading, TextField } from "@radix-ui/themes"



interface ApiData {
  name: string,
  age: number,
  city: string,
  pinCode: string
}

interface ModalProps {
  setOpen: any;
  setEditedValue: React.Dispatch<React.SetStateAction<ApiData>>;
  handleSave: ()=> void;
  editedValue: ApiData;
  open: object
}

const Modal: React.FC<ModalProps> = ({ setOpen, setEditedValue, handleSave, editedValue, open }) => {
  return (
    <Container style={{ width: '100%', height: '100vh', position: 'fixed', left: '0', background: 'rgb(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '10' }}>
      <div style={{ background: 'white', padding: '50px', borderRadius: '10px', display: 'flex', flexDirection: 'column', width: '60%', margin: '0 auto', gap: '10px' }}>
        <Heading style={{ marginBottom: '20px' }}>Edit Profile</Heading>
        <TextField.Input placeholder="Name" value={editedValue.name} onChange={(e) => setEditedValue({ ...editedValue, name: e.target.value })} />
        <TextField.Input type="number" placeholder="Age" value={editedValue.age} onChange={(e) => setEditedValue({ ...editedValue, age: Number(e.target.value) })} />
        <TextField.Input placeholder="City" value={editedValue.city} onChange={(e) => setEditedValue({ ...editedValue, city: e.target.value })} />
        <TextField.Input placeholder="Pin code" value={editedValue.pinCode} onChange={(e) => setEditedValue({ ...editedValue, pinCode: e.target.value })} />
        <Flex gap="3" justify="end" style={{ marginTop: '20px' }}>
          <Button variant="soft" onClick={() => setOpen({...open, editModal: false})}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </Flex>
      </div>
    </Container>
  )
}

export default Modal