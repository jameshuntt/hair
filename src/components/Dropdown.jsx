import React, { Component } from 'react'
import { DropdownRoot, Caret, DropdownBackground, Flipped, children } from 'react'

class Dropdown extends Component{
    render(){
        return(
            <div>
                <DropdownRoot>
                <Flipped flipId="dropdown-caret">
                    <Caret />
                </Flipped>
                <Flipped flipId="dropdown">
                    <DropdownBackground>
                    <Flipped inverseFlipId="dropdown" scale>
                        {children}
                    </Flipped>
                    </DropdownBackground>
                </Flipped>
                </DropdownRoot>
            </div>
        )
    }
}
export default Dropdown