import { Button as HeroButton } from "@heroui/react";


const Button = (props) => {
    return <HeroButton
                onPress={props.event} 
                variant={props.variant}
                >
                { props.buttonTitle }
            </HeroButton>
}

export default Button