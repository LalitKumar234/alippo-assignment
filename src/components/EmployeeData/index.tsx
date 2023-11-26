import { Flex, IconButton, Table } from '@radix-ui/themes'
import { TrashIcon, Pencil1Icon } from '@radix-ui/react-icons'
import Modal from '../Modal'
import { useState } from 'react'
import DeleteModal from '../DeleteModal'

interface ApiData {
    name: string,
    age: number,
    city: string,
    pinCode: string
}

const EmployeeData: React.FC<ApiData> = ({ data }) => {

    const [open, setOpen] = useState({
        editModal: false,
        deleteModal: false
    })
    const [currentIndex, setCurrentIndex] = useState<number>()
    const [deletIndex, setDeleteIndex] = useState<number>()
    const [editedValue, setEditedValue] = useState<ApiData>({
        name: '',
        age: 0,
        city: '',
        pinCode: ''
    })

    const handleEdit = (res: ApiData) => {
        console.log(res)
        setEditedValue({
            name: res.name || '',
            age: res.age || 0,
            city: res.city || '',
            pinCode: res.pinCode || ''
        })
        setOpen({ ...open, editModal: true })
    }

    const handleSave = () => {
        data[currentIndex] = editedValue
        setOpen({ ...open, editModal: false })
    }

    const handleConfirmDelete = (index: number) => {
        data.splice(index, 1)
        setOpen({ ...open, deleteModal: false })
    }

    return (
        <>
            {
                open.editModal ? <Modal
                    setOpen={setOpen}
                    open={open}
                    setEditedValue={setEditedValue}
                    handleSave={handleSave}
                    editedValue={editedValue} /> : null
            }
            {
                open.deleteModal ? <DeleteModal
                    setOpen={setOpen}
                    open={open}
                    handleConfirmDelete={handleConfirmDelete}
                    index={deletIndex}
                /> : null
            }

            <div className='table'>
                <Table.Root>
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeaderCell>SL.No</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Age</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>City</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>PinCode</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {data.length && data.map((res: ApiData, idx: number) => <Table.Row key={idx}>
                            <Table.Cell>{idx + 1}</Table.Cell>
                            <Table.RowHeaderCell>{res.name}</Table.RowHeaderCell>
                            <Table.Cell>{res.age}</Table.Cell>
                            <Table.Cell>{res.city}</Table.Cell>
                            <Table.Cell>{res.pinCode}</Table.Cell>
                            <Table.Cell>
                                <Flex gap="2">
                                    <IconButton variant="soft"
                                        onClick={() => {
                                            handleEdit(res)
                                            setCurrentIndex(idx)
                                        }}
                                    >
                                        <Pencil1Icon width="18" height="18" />
                                    </IconButton>
                                    <IconButton
                                        variant="soft"
                                        onClick={() => {
                                            setOpen({ ...open, deleteModal: true })
                                            setDeleteIndex(idx)
                                        }
                                        }>
                                        <TrashIcon width="18" height="18" />
                                    </IconButton>
                                </Flex>
                            </Table.Cell>
                        </Table.Row>)}
                    </Table.Body>
                </Table.Root>
            </div>
        </>
    )
}

export default EmployeeData 