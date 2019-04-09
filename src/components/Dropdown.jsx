import React, { Component } from 'react'
import { Button, Collapse } from 'react-bootstrap'

class Expand extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        open: false,
      };
    }
  
    render() {
      const { open } = this.state;
      return (
        <>
          <Button
            onClick={() => this.setState({ open: !open })}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            click
          </Button>
          <Collapse in={this.state.open}>
            <div id="example-collapse-text">
                Mens Cut $23
                <br></br>
                Ladies Cut $35
                <br></br>

                ALL CHEMICAL SERVICES ARE PRICED WITHOUT HAIRCUTS. PLEASE ADD ADDITIONAL $25.
                <br></br>
                <br></br>
                Hair Color Retouch $60
                <br></br>
                Hair Color Full Head $80
                <br></br>
                Foil Retouch $90
                <br></br>
                Foil Highlight $120
                <br></br>
                Cap Highlight $80
                <br></br>
                Toner $25
                <br></br>
                T.W. Service $15
                <br></br>
                Perm $80
                <br></br>
                Keratin Treatment $90
                <br></br>
                Conditioning Treatment $35
                <br></br>
                Corrective Color Price Upom Consultation
                <br></br>
                Price may vary based on hair length and condition

            </div>
          </Collapse>
        </>
      );
    }
  }
  
  export default Expand;