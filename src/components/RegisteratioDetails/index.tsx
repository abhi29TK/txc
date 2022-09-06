import { Grid } from "@mui/material";
import { _Form } from "../../types/forms.type";
import styles from "./registeration.module.css";

type _Props = {
  onClear: () => void;
  entry: _Form | null;
};

const RegisteratioDetails: React.FC<_Props> = ({ onClear, entry }) => {
  if (entry === null) return <></>;
  return (
    <Grid container className={styles.root}>
      <Grid item xs={12} className={styles.entry}>
        <div>Location: {entry.location}</div>
      </Grid>
      <Grid item xs={12} className={styles.entry}>
        <div>Role: {entry.role}</div>
      </Grid>{" "}
      <Grid item xs={12} className={styles.entry}>
        <div>Position: {entry.position}</div>
      </Grid>{" "}
      <Grid item xs={12} className={styles.entry}>
        <div>Sex: {entry.sex}</div>
      </Grid>{" "}
      <Grid item xs={12} className={styles.entry}>
        <div>Size: {entry.size}</div>
      </Grid>{" "}
      <Grid item xs={12} className={styles.entry}>
        <div>Products: {entry.products}</div>
      </Grid>{" "}
      <Grid item xs={12} className={styles.entry}>
        <div>Function: {entry.function}</div>
      </Grid>{" "}
      <Grid item xs={12} className={styles.entry}>
        <div>Type: {entry.type}</div>
      </Grid>
      <Grid item xs={12} className={styles.entry}>
        <div>Credits: {entry.credits}</div>
      </Grid>{" "}
      <Grid item xs={12} className={styles.entry}>
        <div>Organizations: {entry.organizations}</div>
      </Grid>
    </Grid>
  );
};

export default RegisteratioDetails;
