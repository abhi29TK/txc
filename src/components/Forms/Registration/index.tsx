import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import {
  credits,
  functions,
  locations,
  organizations,
  positions,
  products,
  roles,
  sexes,
  sizes,
  types,
} from "../../../constant/forms.constant";
import { registrationInitials } from "../../../constant/initials.constant";
import { _Form } from "../../../types/forms.type";
import { MultipleSelectChip } from "../../inputs";

type _Props = {
  setEntry: (details: _Form) => void;
};

const RegistrationForm: React.FC<_Props> = ({ setEntry }) => {
  const [registrationDetails] = useState(registrationInitials);

  const registrationSubmitHandler = (values: any) => {
    setEntry(values);
  };

  return (
    <Formik
      initialValues={registrationDetails}
      onSubmit={registrationSubmitHandler}
    >
      {({ values, handleChange }) => {
        return (
          <Form>
            <Typography variant="h6" gutterBottom>
              Registration Form
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Location
                  </InputLabel>
                  <Select
                    labelId="location"
                    name="location"
                    id="location"
                    value={values.location}
                    label="Location"
                    onChange={handleChange}
                  >
                    {locations &&
                      locations.map((location, index) => (
                        <MenuItem key={index} value={location}>
                          {location}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="role"
                    name="role"
                    id="role"
                    value={values.role}
                    label="Role"
                    onChange={handleChange}
                  >
                    {roles &&
                      roles.map((role, index) => (
                        <MenuItem key={index} value={role}>
                          {role}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Position
                  </InputLabel>
                  <Select
                    labelId="position"
                    name="position"
                    id="position"
                    value={values.position}
                    label="Position"
                    onChange={handleChange}
                  >
                    {positions &&
                      positions.map((position, index) => (
                        <MenuItem key={index} value={position}>
                          {position}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <MultipleSelectChip
                  onChange={handleChange}
                  inputValue={values.functions}
                  options={functions}
                  inputName={"functions"}
                  label={"Functions"}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                  <Select
                    labelId="type"
                    name="type"
                    id="type"
                    value={values.type}
                    label="Type"
                    onChange={handleChange}
                  >
                    {types &&
                      types.map((type, index) => (
                        <MenuItem key={index} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                  <Select
                    labelId="sex"
                    name="sex"
                    id="sex"
                    value={values.sex}
                    label="Sex"
                    onChange={handleChange}
                  >
                    {sexes &&
                      sexes.map((sex, index) => (
                        <MenuItem key={index} value={sex}>
                          {sex}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <MultipleSelectChip
                  onChange={handleChange}
                  inputValue={values.products}
                  options={products}
                  inputName={"products"}
                  label={"Products"}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Sizes</InputLabel>
                  <Select
                    labelId="size"
                    name="size"
                    id="size"
                    value={values.size}
                    label="Sizes"
                    onChange={handleChange}
                  >
                    {sizes &&
                      sizes.map((size, index) => (
                        <MenuItem key={index} value={size}>
                          {size}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <MultipleSelectChip
                  onChange={handleChange}
                  inputValue={values.credits}
                  options={credits}
                  inputName={"credits"}
                  label={"Credits"}
                />
              </Grid>{" "}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Organization
                  </InputLabel>
                  <Select
                    labelId="organization"
                    name="organizations"
                    id="organization"
                    value={values.organizations}
                    label="Organization"
                    onChange={handleChange}
                  >
                    {organizations &&
                      organizations.map((organization, index) => (
                        <MenuItem key={index} value={organization}>
                          {organization}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit">
                  Submit Details
                </Button>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegistrationForm;
