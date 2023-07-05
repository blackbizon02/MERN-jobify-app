import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useAppContext } from "../../context/appContext";
import { FormRow, Alert } from "../../components";
import { useState } from "react";

const Profile = () => {
  const { user, showAlert, displayAlert, isLoading, updateUser } =
    useAppContext();

  const [formData, setFormData] = useState({
    name: user?.name,
    lastName: user?.lastName,
    email: user?.email,
    location: user?.location,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.lastName ||
      !formData.email ||
      !formData.location
    ) {
      displayAlert();
      return;
    }
    updateUser(formData);
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        {showAlert && <Alert />}

        <div className="form-center">
          <FormRow
            labelText="name"
            type="text"
            name="name"
            value={formData?.name}
            handleChange={handleChange}
          />
          <FormRow
            labelText="last name"
            type="text"
            name="lastName"
            value={formData?.lastName}
            handleChange={handleChange}
          />
          <FormRow
            labelText="email"
            type="email"
            name="email"
            value={formData?.email}
            handleChange={handleChange}
          />
          <FormRow
            labelText="location"
            type="text"
            name="location"
            value={formData?.location}
            handleChange={handleChange}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "Save Changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
