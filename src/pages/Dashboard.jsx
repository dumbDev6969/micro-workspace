import { useState } from 'react'
import Button from '../components/Button'
import { Typography, Card } from "@heroui/react";

const Dashboard = ({ children }) => {
    const [isWorking, setIsWorking] = useState(true);

    function toggleMode() {
        setIsWorking((prevMode) => (prevMode ? false : true))
    }
    return (
        <div>
            <Button
                buttonTitle={isWorking ? 'Working' : 'Not working'}
                event={toggleMode}
                variant={isWorking ? 'primary' : 'tertiary'}
            />

            <Card className="w-[320px]" variant={ isWorking ? 'default' : 'secondary' }>
                <Card.Header>
                    <Card.Title>Status</Card.Title>
                </Card.Header>
                <Card.Content>
                    <p>{ isWorking ? 'Deep Work Mode Active' : 'On a Break' }</p>
                </Card.Content>
            </Card>
            <div>{ children }</div>
        </div>
    )
}

export default Dashboard