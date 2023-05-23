import { Row, Col } from "react-bootstrap";
import { DataItem } from "../components/DataItem";
import { Fragment } from "react";
import React, { useState, useEffect } from 'react';
import { FastAPIClient } from "../client";

export function Home() {
  const [data, setData] = useState<any[]>([]);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = new FastAPIClient('https://www.localhostdomain.com');

        const names = await client.getColectionNameData();
        console.log(names);

        const response = await client.getDocumentsPaged("sightings", 10, 1, null, null, null, null, 65, 69, null, null, null, null, null, null, true, "edge-sightings", null, null);
        console.log(response);
        
        const dataItems = await response
        setData(dataItems);
      } catch (error) {
        console.error('Error fetching paged documents:', error);
      }
    };

    fetchData();
  }, []);

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
              {item.connectedDocs.map((data: any) =>
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

