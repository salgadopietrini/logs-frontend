import React from "react";
import {
  render,
  act,
  fireEvent,
  screen,
  queryByAttribute,
} from "@testing-library/react";
import AppProvider from "../../../AppProvider";
import List from "../List";

const getById = queryByAttribute.bind(null, "id");

describe("List test", () => {
  it("should render list component without data", () => {
    const component = (
      <AppProvider>
        <List users={[]} countries={[]} />
      </AppProvider>
    );
    render(component);
    expect(screen).toMatchSnapshot();
  });
  it("should render list component with data, click on the first row and its delete button", () => {
    const users = [
      {
        id: "firstUserId",
        name: "name",
        surname: "surname",
        country: "country",
        birthday: "birthday",
      },
    ];
    const countries = [{ name: { en: "Country", pt: "Pais" }, code: "CT" }];

    const component = (
      <AppProvider>
        <List users={users} countries={countries} />
      </AppProvider>
    );

    const dom = render(component);
    const row = getById(dom.container, "firstUserId");
    const rowName = row!.children[0].innerHTML;
    const rowCountry = row!.children[1].innerHTML;
    const rowBirthday = row!.children[2].innerHTML;
    const deleteButton = row!.children[3].getElementsByTagName("button")![0];

    expect(rowName).toBe("name surname");
    expect(rowCountry).toBe("country");
    expect(rowBirthday).toBe("birthday");
    act(() => {
      fireEvent.click(row!);
      fireEvent.click(deleteButton);
    });
    expect(screen).toMatchSnapshot();
  });
});
