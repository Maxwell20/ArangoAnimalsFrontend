import dataItems2 from "../data/SampleData2.json";
import dataItems from "../data/SampleData.json";
import { Row, Col } from "react-bootstrap";
import { DataItem } from "../components/DataItem";
import { Fragment } from "react";

export function Home() {
  var counter = 0;
  {
    dataItems.map((item, index) => (counter = index));
  }

  return (
    <>
      <h1>Selected Doc</h1>
      <Row md={2} xs={1} lg={3} className="g-3 mh-100">
        {dataItems.map((item) => (
          <Col key={item.doc._key}>
            <DataItem {...item.doc} key={item.doc._key} />
          </Col>
        ))}
      </Row>
      <Row style={{ height: 50 }}>
        <span>
          <h3> </h3>
        </span>
      </Row>
      {counter < 2 ? (
        <Row>
          <span>
            <h1>Connected Docs</h1>
          </span>
        </Row>
      ) : (
        void 0
      )}
      {counter < 2 ? (
        <Row md={2} xs={1} lg={3} className="g-3">
          {dataItems.map((item) => (
            <Fragment key={item.doc._key}>
              {item.connectedDocs.map((data) =>
                data != null ? (
                  <Col key={data._key}>
                    <DataItem {...data} />
                  </Col>
                ) : (
                  void 0
                )
              )}
            </Fragment>
          ))}
        </Row>
      ) : (
        void 0
      )}
    </>
  );
}
