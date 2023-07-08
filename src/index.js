const withMutation = (person) => {
  person.study = true;
  return person;
};

const withoutMutationAssign = (person) =>
  Object.assign({}, person, { study: true });

const withoutMutationSpread = (person) => ({
  ...person,
  study: true,
});

export { withMutation, withoutMutationAssign, withoutMutationSpread };
