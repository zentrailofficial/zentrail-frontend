import { useForm, Controller } from "react-hook-form";
import CustomButton from "@/comman-component/customButton";
import CloseIcon from "@mui/icons-material/Close";
import TextInput2 from "@/comman-component/TextInput2";
import { Chip } from "@mui/material";

const AddTraveller = ({ handleClose, onSave }) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      age: "",
      gender: "",
    },
  });

  const genderOptions = [
    { id: "male", label: "Male" },
    { id: "female", label: "Female" },
    { id: "other", label: "Other" },
  ];

  const onSubmit = (data) => {
    onSave(data);
    reset();
    handleClose();
  };

  return (
    <div className="relative items-center bg-[#DEF2FC] p-7">
      <button onClick={handleClose} className="absolute top-0 right-0 p-1">
        <CloseIcon />
      </button>
      <h3 className="dm_sans responsiveheading3 font-medium mb-2">Traveller Details</h3>

      <div className="mt-3">
        <TextInput2
          control={control}
          name="fullname"
          label="Full Name"
          placeholder="Enter your Full Name"
          rules={{
            required: "Name is required",
            minLength: { value: 3, message: "Minimum 3 characters" },
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Only alphabets are allowed",
            },
          }}
        />
      </div>
      <div className="mt-3">
        <TextInput2
          control={control}
          name="age"
          label="Age"
          type="number"
          placeholder="Enter age"
          rules={{
            required: "Age is required",
            min: { value: 1, message: "Minimum age is 1" },
            max: { value: 120, message: "Maximum age is 120" },
          }}
        />
      </div>
      <label className="block mb-1 text-sm font-medium mt-4">Gender</label>
      <Controller
        name="gender"
        control={control}
        rules={{ required: "Please select a gender" }}
        render={({ field }) => (
          <div className="flex gap-2">
            {genderOptions.map((opt) => (
              <Chip
                key={opt.id}
                label={opt.label}
                onClick={() => field.onChange(opt.id)}
                sx={{
                  backgroundColor: field.value === opt.id ? "#35C0F0" : "#eee",
                  color: field.value === opt.id ? "#fff" : "#333",
                }}
              />
            ))}
          </div>
        )}
      />
      {errors.gender && (
        <p className="text-red-600 text-sm mt-1">{errors.gender.message}</p>
      )}

      <div className="mt-4">
        <CustomButton type="button" onClick={handleSubmit(onSubmit)}>
          Save Traveller
        </CustomButton>
      </div>
    </div>
  );
};

export default AddTraveller;
