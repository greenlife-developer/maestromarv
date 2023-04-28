import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const Faq = () => {
  return (
    <div className="faq-header">
      <div>
        <Collapse defaultActiveKey={["1"]} expandIconPosition="end">
          <Panel
            className="header"
            header="How long does a laptop repair take?"
            key="1"
          >
            <div className="faq-container">
              <p>
                The repair time may vary depending on the complexity of the
                issue and the availability of replacement parts. Simple repairs
                can take a few hours, while more complex ones can take several
                days.
              </p>
            </div>
          </Panel>
          <Panel
            className="header"
            header="Can I get a laptop repair service on-site?"
            key="2"
          >
            <div className="faq-container">
              <p>
                Yes, some repair service providers offer on-site repair
                services. However, it may cost more than bringing the laptop to
                the repair shop.
              </p>
            </div>
          </Panel>
          <Panel
            className="header"
            header="Is it safe to repair a laptop myself?"
            key="3"
          >
            <div className="faq-container">
              <p>
                If you are not an experienced technician, it is not recommended
                to repair a laptop yourself. You may end up causing more damage
                or even harm yourself. It is better to seek professional help
                for laptop repair services.
              </p>
            </div>
          </Panel>
          <Panel
            className="header"
            header="Can one or two keys on my keyboard be fixed"
            key="4"
          >
            <div className="faq-container">
              <p>
                it depends, it may work and it may not work when serviced, the
                best is to replace the entire keyboard.
              </p>
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default Faq;
