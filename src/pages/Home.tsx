import { Row, Col } from "react-bootstrap";
import { DataItem } from "../components/DataItem";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import { makeQuery, makeInitialQuery } from "../utilities/makeQuery";

interface homeProps {
  data: any[]
  updateData: (newData: any[]) => void
}

export function Home() {
  const [data, setData] = useState<any[]>([]);
  const [counter, setCounter] = useState<number>(0);


  const initialQueryData = makeInitialQuery()
  const queryData = makeQuery({collections: "sightings", pageSize: 6, pageNumber: 1})
  useEffect(() => {
    if (queryData && queryData != null){
      setData(queryData)
    }
  },[queryData]); 

  useEffect(() => {
    setCounter(data.length);
  }, [data]);

  return (
    <>
      <h1>Selected Doc</h1>
      <Row md={2} xs={1} lg={3} className="g-3 mh-100">
        {data.map((item: any) => (
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
      {counter < 2 && (
        <Row>
          <span>
            <h1>Connected Docs</h1>
          </span>
        </Row>
      )}
      {counter < 2 && (
        <Row md={2} xs={1} lg={3} className="g-3">
          {data.map((item: any) => (
            <Fragment key={item.doc._key}>
              {item.connectedDocs.map(
                (data: any) =>
                  data != null && (
                    <Col key={data._key}>
                      <DataItem {...data} />
                    </Col>
                  )
              )}
            </Fragment>
          ))}
        </Row>
      )}
    </>
  );
}
