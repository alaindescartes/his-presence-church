"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Page = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    spouseFirstName: "",
    spouseLastName: "",
    children: [{ firstName: "", lastName: "", birthDate: "", gender: "" }],
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formValues.firstName) newErrors.firstName = "First name is required";
    if (!formValues.lastName) newErrors.lastName = "Last name is required";
    if (!formValues.email) newErrors.email = "Email is required";
    if (!formValues.phoneNumber)
      newErrors.phoneNumber = "Phone number is required";

    formValues.children.forEach((child, index) => {
      if (child.firstName && !child.lastName) {
        newErrors[`childLastName${index}`] =
          "Child's last name is required if first name is provided";
      }
      if (child.lastName && !child.firstName) {
        newErrors[`childFirstName${index}`] =
          "Child's first name is required if last name is provided";
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e, index = null, field = null) => {
    if (index !== null && field !== null) {
      const newChildren = formValues.children.map((child, i) =>
        i === index ? { ...child, [field]: e.target.value } : child
      );
      setFormValues({ ...formValues, children: newChildren });
    } else {
      setFormValues({ ...formValues, [e.target.id]: e.target.value });
    }
  };

  const handleAddChild = () => {
    setFormValues({
      ...formValues,
      children: [
        ...formValues.children,
        { firstName: "", lastName: "", birthDate: "", gender: "" },
      ],
    });
  };

  const handleRemoveChild = (index) => {
    const newChildren = formValues.children.filter((_, i) => i !== index);
    setFormValues({ ...formValues, children: newChildren });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully", formValues);
    } else {
      console.log("Form contains errors", errors);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        WELCOME TO HIS PRESENCE CHURCH
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Parent Information */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1">
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-semibold mb-2"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={formValues.firstName}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg shadow-sm ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div className="flex-1">
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={formValues.lastName}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg shadow-sm ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Other Parent Information */}
        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg shadow-sm ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 font-semibold mb-2"
            >
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="text"
              value={formValues.phoneNumber}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg shadow-sm ${
                errors.phoneNumber ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
            )}
          </div>
        </div>

        {/* Spouse Information */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Your Spouse (Optional)
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="flex-1">
              <label
                htmlFor="spouseFirstName"
                className="block text-gray-700 font-semibold mb-2"
              >
                First Name
              </label>
              <input
                id="spouseFirstName"
                type="text"
                value={formValues.spouseFirstName}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg shadow-sm border-gray-300"
                placeholder="Enter your spouse's first name"
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="spouseLastName"
                className="block text-gray-700 font-semibold mb-2"
              >
                Last Name
              </label>
              <input
                id="spouseLastName"
                type="text"
                value={formValues.spouseLastName}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg shadow-sm border-gray-300"
                placeholder="Enter your spouse's last name"
              />
            </div>
          </div>
        </div>

        {/* Children Information */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Add a Child</h2>
          {formValues.children.map((child, index) => (
            <div key={index} className="space-y-4 mb-6 border-b pb-4">
              <div className="flex flex-col md:flex-row md:space-x-6">
                <div className="flex-1">
                  <label
                    htmlFor={`childFirstName${index}`}
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    First Name
                  </label>
                  <input
                    id={`childFirstName${index}`}
                    type="text"
                    value={child.firstName}
                    onChange={(e) => handleChange(e, index, "firstName")}
                    className={`w-full p-3 border rounded-lg shadow-sm ${
                      errors[`childFirstName${index}`]
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter your child's first name"
                  />
                  {errors[`childFirstName${index}`] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[`childFirstName${index}`]}
                    </p>
                  )}
                </div>

                <div className="flex-1">
                  <label
                    htmlFor={`childLastName${index}`}
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id={`childLastName${index}`}
                    type="text"
                    value={child.lastName}
                    onChange={(e) => handleChange(e, index, "lastName")}
                    className={`w-full p-3 border rounded-lg shadow-sm ${
                      errors[`childLastName${index}`]
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter your child's last name"
                  />
                  {errors[`childLastName${index}`] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[`childLastName${index}`]}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:space-x-6">
                <div className="flex-1">
                  <label
                    htmlFor={`childBirthDate${index}`}
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Birth Date
                  </label>
                  <input
                    id={`childBirthDate${index}`}
                    type="date"
                    value={child.birthDate}
                    onChange={(e) => handleChange(e, index, "birthDate")}
                    className="w-full p-3 border rounded-lg shadow-sm border-gray-300"
                  />
                </div>

                <div className="flex-1">
                  <label
                    htmlFor={`childGender${index}`}
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Gender
                  </label>
                  <select
                    id={`childGender${index}`}
                    value={child.gender}
                    onChange={(e) => handleChange(e, index, "gender")}
                    className="w-full p-3 border rounded-lg shadow-sm border-gray-300"
                  >
                    <option value="">--Please choose an option--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div className="text-right">
                {formValues.children.length > 1 && (
                  <Button
                    type="button"
                    onClick={() => handleRemoveChild(index)}
                    className="text-red-500"
                  >
                    Remove Child
                  </Button>
                )}
              </div>
            </div>
          ))}

          <Button
            type="button"
            onClick={handleAddChild}
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            Add Another Child
          </Button>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <Button
            type="submit"
            className="w-full bg-black hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            Finish
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Page;
