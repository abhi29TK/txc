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
import * as yup from "yup";
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

type _Props = {
  setEntry: (details: _Form) => void;
};

const validationSchema = yup.object().shape({
  location: yup.string(),
  role: yup.string(),
  position: yup.string(),
  function: yup.string(),
  type: yup.string(),
  sex: yup.string(),
  products: yup.string(),
  size: yup.string(),
  credits: yup.string(),
  organizations: yup.string(),
});

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
      {({ values, errors, handleChange }) => {
        {
          console.log("errors", errors);
        }

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
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Function
                  </InputLabel>
                  <Select
                    labelId="function"
                    name="function"
                    id="function"
                    value={values.function}
                    label="Function"
                    onChange={handleChange}
                  >
                    {functions &&
                      functions.map((func, index) => (
                        <MenuItem key={index} value={func}>
                          {func}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
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
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Products
                  </InputLabel>
                  <Select
                    labelId="product"
                    name="products"
                    id="product"
                    value={values.products}
                    label="Products"
                    onChange={handleChange}
                  >
                    {products &&
                      products.map((product, index) => (
                        <MenuItem key={index} value={product}>
                          {product}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
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
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Credits</InputLabel>
                  <Select
                    labelId="credit"
                    name="credits"
                    id="credit"
                    value={values.credits}
                    label="Credits"
                    onChange={handleChange}
                  >
                    {credits &&
                      credits.map((credit, index) => (
                        <MenuItem key={index} value={credit}>
                          {credit}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
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
