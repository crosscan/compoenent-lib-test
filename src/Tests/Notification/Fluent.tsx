import React, {FC, useCallback, useState} from 'react';
import {IButtonProps, PrimaryButton, Stack, TeachingBubble, Text} from "@fluentui/react";

export const NotificationExample: FC = () => {
    const buttonId = 'targetButton';
    const [teachingBubbleVisible, setTeachingBubbleVisible] = useState<boolean>(false);
    const toggleTeachingBubbleVisible = useCallback(() => {
        setTeachingBubbleVisible(!teachingBubbleVisible)
    }, [teachingBubbleVisible, setTeachingBubbleVisible])
    const exampleSecondaryButtonProps: IButtonProps = React.useMemo(
        () => ({
            children: 'Maybe later',
            onClick: toggleTeachingBubbleVisible,
        }),
        [toggleTeachingBubbleVisible],
    );
    return <Stack>
        <Text variant={'large'}>Notification Example</Text>
        <PrimaryButton onClick={() => setTeachingBubbleVisible(true)} id={buttonId}>Create
            Notification</PrimaryButton>
        {teachingBubbleVisible && (
            <TeachingBubble
                target={`#${buttonId}`}
                primaryButtonProps={exampleSecondaryButtonProps}
                onDismiss={toggleTeachingBubbleVisible}
                headline="Example teaching bubble"
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam
                magni
                harum non?
            </TeachingBubble>
        )}
    </Stack>
}
