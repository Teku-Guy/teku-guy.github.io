import React, { useState } from "react";
import { Card, Tooltip, OverlayTrigger, Button, Collapse } from "react-bootstrap";
import { IconContext } from 'react-icons';
import { GrGithub, GrMonitor } from 'react-icons/gr';

function getTip(props) {
  const {placement} = props;
  if(placement === 'left'){
    return `Repository`;
  } else {
    return `View Deployed Site`;
  }
}

function ProjectCards(props) {
  const [open, setOpen] = useState(false);

  const renderTooltip = (prop) => (
    <Tooltip id="button-tooltip" {...prop}>
      {getTip(prop)}
    </Tooltip>
  );

  return (
    <Card>
      <div className="img-container">
        <img alt={props.name} src={props.image}/>
      </div>
      <div className="content">
        <p className="project-title" id="card-title">{props.name}</p>
        <div className="icons">
          <OverlayTrigger
            key="1"
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <a href={props.github} className="text-decoration-none dark">
              <IconContext.Provider value={{ className: "porject-icon" }}>
                <div>
                  <GrGithub alt="Repository"/>
                </div>
              </IconContext.Provider>
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            key="2"
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <a href={props.deploy}  className="text-decoration-none">
            <IconContext.Provider value={{ className: "porject-icon" }}>
              <div>
                <GrMonitor alt="Deployed Site"/>
              </div>
              </IconContext.Provider>
            </a>
          </OverlayTrigger>
        </div>
        
          <Button 
            onClick={() => setOpen(!open)}
            aria-controls="lm-text"
            aria-expanded={open}
            variant="link tag-toggle"
            // className=""
          >
            Learn More:
          </Button>
          <Collapse in={open}>
            <div id="lm lm-text ">
              ({props.lm})
            </div>
          </Collapse>
      </div>
    </Card>
  );
}

export default ProjectCards;