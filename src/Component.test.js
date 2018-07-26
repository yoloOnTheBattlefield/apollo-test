import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { Component, getSiteFarmers } from "./Component";
import { farmerProps as props, farmer } from "./props";

const mocks = [
  {
    request: {
      query: getSiteFarmers,
      variables: {
        siteId: 1
      }
    },
    result: {
      data: {
        getSiteFarmers: { response: [farmer] }
      }
    }
  }
];

describe("<Component />", () => {
  describe("rendering", () => {
    it("renders <List.Item />'s", async () => {
      const wrapper = mount(
        <MockedProvider mocks={mocks} removeTypename>
          <Component {...props} />
        </MockedProvider>
      );
      await new Promise(resolve => setTimeout(() => resolve(), 1000));
      wrapper.update();
      console.log(wrapper.debug());
    });
  });
});
