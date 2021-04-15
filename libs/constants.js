export const SUBJECTS = {
  math: "Math",
  ela: "ELA",
  science: "Science",
};

// represents how we know what input we are handling
// as well as what the property name will be when
// submitting the form to BE
export const UNIT_FORM_DATA_SYMBOLS = {
  unitTitle: "title",
  unitNumber: "number",
  startDate: "startDate",
  endDate: "endDate",
  reviewDate: "reviewDate",
  subjectId: "subjectId",
};

export const ASSESSMENT_VALUES = {
  levelOne: {
    field: "beginningStep",
    value: "Beginning Step"
  },
  levelTwo: {
    field: "nearing",
    value: "Nearing",
  },
  levelThree: {
    field: "proficient",
    value: "Proficient",
  }
};
