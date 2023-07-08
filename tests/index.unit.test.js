import {
  withMutation,
  withoutMutationAssign,
  withoutMutationSpread,
} from "../src";
import PersonBuilder from "./builders/personBuilder";
describe("Suite unit test for immutability and mutability functions", () => {
  test("Should mutate the object", () => {
    const person = new PersonBuilder().build();

    const ana = withMutation(person);

    expect(person === ana).toBeTruthy();
    expect(person.study !== ana.study).toBeFalsy();
  });

  test("Should keep the value without mutation with assign", () => {
    const person = new PersonBuilder().build();

    const ana = withoutMutationAssign(person);

    expect(person === ana).toBeFalsy();
    expect(person.study !== ana.study).toBeTruthy();
  });

  test("Should keep the value without mutation with spread", () => {
    const person = new PersonBuilder().build();

    const ana = withoutMutationSpread(person);

    expect(person === ana).toBeFalsy();
    expect(person.study !== ana.study).toBeTruthy();
  });
});
