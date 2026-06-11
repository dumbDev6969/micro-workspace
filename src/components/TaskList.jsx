
import { Table } from "@heroui/react";

const TaskList = ({ items }) => {
    if (items.length === 0) return <p>No tasks</p>;
    return (
        <>
            <Table>
                <Table.ScrollContainer>
                    <Table.Content aria-label="Team members" className="min-w-[600px]">
                        <Table.Header>
                            <Table.Column isRowHeader>Task Id</Table.Column>
                            <Table.Column>Task</Table.Column>
                            <Table.Column>Status</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            {items.map(task => (
                                <Table.Row key={task.id}>
                                    <Table.Cell >{task.id}</Table.Cell>
                                    <Table.Cell>{task.text}</Table.Cell>
                                    <Table.Cell>{task.isComplete ? 'Complete' : 'On-going'}</Table.Cell>
                                </Table.Row>
                            ))}

                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </>
    )
}

export default TaskList