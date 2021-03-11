import React from "react";
import {Formik} from "formik";
import {ScrollView} from "react-native";

function AppForm({initialValues, onSubmit, validationSchema, children}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => <>{children}</>}
      </Formik>
    </ScrollView>
  );
}

export default AppForm;
