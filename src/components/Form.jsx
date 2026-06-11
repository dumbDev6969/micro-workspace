import { Button, Card, Form, Input, Label, Link, TextField } from '@heroui/react'



const DynamicForm = (props) => {
    return (

        <Card className="w-full max-w-md" variant={ props.variant }>
            <Card.Header>
                <Card.Title>{ props.title }</Card.Title>
                <Card.Description>{ props.description }</Card.Description>
            </Card.Header>
            <Form onSubmit={ props.onSubmit}>
                <Card.Content>
                    <div className="flex flex-col gap-4" >
                        { props.children }
                    </div>
                </Card.Content>
                <Card.Footer className="mt-4 flex flex-col gap-2">
                    <Button className="w-full" type={ props.btnType }>
                        { props.btnText }
                    </Button>
                </Card.Footer>
            </Form>
        </Card>

    )
}

export default DynamicForm