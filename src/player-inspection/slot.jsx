import React from 'react';
import { Image, Label } from 'semantic-ui-react';

/**
 * 
 * @param {object} props
 * @param {number} props.stack
 * @returns 
 */
export function Slot(props) {
    const { stack, size = 'medium' } = props;
    return (
        <Label as='a' size={size} >
            <Image src='/assets/images/items/Item_50.png' />
            {stack}
        </Label>
    );
}

export default Slot;
