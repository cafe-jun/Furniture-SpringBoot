import TextField from "@mui/material/TextField";

interface Props {
  variant: string;
  label: string;
  name: string;
  error: string;
  value: string;
  size: string;
  placeholder: string;
  fullWidth: string;
  onChange: string;
}

const TextInput = (props: any) => {
  const {
    variant = "outlined",
    label,
    name,
    error = null,
    value,
    size = "medium",
    placeholder,
    fullWidth,
    onChange,
    ...other
  } = props;

  return (
    <TextField
      variant={variant}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      size={size}
      fullWidth
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
};

export default TextInput;
