import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header";
import SidebarComponent from "./Sidebar";

const Offre = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box display="flex" sx={{  minHeight: "100vh" }}>
      {/* Sidebar */}
      <SidebarComponent />

      {/* Main Content */}
      <Box flex="1" p="20px">
        <Header title="CREATE OFFER" subtitle="Create a New User JOB OFFER" />

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="company"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.company}
                  name="company"
                  error={!!touched.company && !!errors.company}
                  helperText={touched.company && errors.company}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="position"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.position}
                  name="position"
                  error={!!touched.position && !!errors.position}
                  helperText={touched.position && errors.position}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="workType"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.workType}
                  name="workType"
                  error={!!touched.workType && !!errors.workType}
                  helperText={touched.workType && errors.workType}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Work Location"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.workLocation}
                  name="workLocation"
                  error={!!touched.workLocation && !!errors.workLocation}
                  helperText={touched.workLocation && errors.workLocation}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Created By"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.createdBy}
                  name="createdBy"
                  error={!!touched.createdBy && !!errors.createdBy}
                  helperText={touched.createdBy && errors.createdBy}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address}
                  name="address"
                  error={!!touched.address && !!errors.address}
                  helperText={touched.address && errors.address}
                  sx={{ gridColumn: "span 4" }}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Create New Offre
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{,3}\)[ -]?)|([0-9]{,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  company: yup.string().required("required"),
  position: yup.string().required("required"),
  workType: yup
    .string()
    .oneOf(["full-time", "part-time", "contract"], "Invalid work type")
    .required("required"),
  workLocation: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  createdBy: yup.string().required("required"),
  address: yup.string().required("required"),
});

const initialValues = {
  company: "",
  position: "",
  workType: "",
  workLocation: "",
  createdBy: "",
  address: "",
};

export default Offre;
