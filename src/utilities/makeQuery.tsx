import { useState, useEffect } from "react";
import { FastAPIClient } from "../client";

type makeQueryProps = {
  collections: string;
  pageSize: number;
  pageNumber: number;
  startTime?: string;
  endTime?: string;
  longStart?: number;
  longEnd?: number;
  latStart?: number;
  latEnd?: number;
  country?: string;
  type?: string;
  attribute1Start?: number;
  attribute1End?: number;
  attribute2Start?: number;
  attribute2End?: number;
  includeEdges?: boolean;
  edgeCollection?: string;
  excludeEdges?: boolean;
  collectionFilter?: string;
};

export function makeQuery({
  collections,
  pageSize,
  pageNumber,
  startTime,
  endTime,
  longStart,
  longEnd,
  latStart,
  latEnd,
  country,
  type,
  attribute1Start,
  attribute1End,
  attribute2Start,
  attribute2End,
  includeEdges,
  edgeCollection,
  excludeEdges,
  collectionFilter,
}: makeQueryProps) {
  const [data, setData] = useState<any[]>([]);
  edgeCollection = "edges-sightings"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = new FastAPIClient("https://192.168.1.70");
        const response = await client.getDocumentsPaged(
          collections,
          pageSize,
          pageNumber,
          startTime,
          endTime,
          longStart,
          longEnd,
          latStart,
          latEnd,
          country,
          type,
          attribute1Start,
          attribute1End,
          attribute2Start,
          attribute2End,
          includeEdges,
          edgeCollection,
          excludeEdges,
          collectionFilter
        );
        const dataItems = await response;
        setData(dataItems);
      } catch (error) {
        console.error("Error fetching paged documents:", error);
      }
    };
    fetchData();
  }, []);
  return data;
}

export function makeInitialQuery() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = new FastAPIClient("https://192.168.1.70");
        const names = await client.getColectionNameData();
        const collectionNames = names[0].join(",");
        const response = await client.getDocumentsPaged(
          collectionNames,
          4,
          1,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          true,
          "edges-sightings",
          null,
          null
        );
        const dataItems = await response;
        setData(dataItems);
      } catch (error) {
        console.error("Error fetching paged documents:", error);
      }
    };
    fetchData();
  }, []);
  return data;
}
