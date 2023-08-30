export const inputConfig = {
  username: {
    id: "username",
    label: "Username*",
    message: "Enter a valid student email address @stud.noroff.no",
    attributes: {
      type: "text",
      required: true,
      placeholder: "janesmith",
    },
  },
  email: {
    id: "email",
    label: "Email Address",
    message: "Enter a valid email address.",
    attributes: {
      type: "email",
      required: true,
      pattern: "^[\\w\\-.]+@(stud\\.)?noroff\\.no$",
      title: "Only Noroff student or teacher emails are valid.",
      autocomplete: "email",
      placeholder: "janesmith@gmail.com",
    },
  },
  password: {
    id: "password",
    label: "Password*",
    message: "Password must contain at least 8 characters",
    attributes: {
      type: "password",
      required: true,
      minlength: "8",
      autocomplete: "current-password",
    },
  },
  avatar: {
    long: true,
    id: "avatar",
    label: "Avatar",
    message: "Please enter an avatar URL",
    attributes: {
      type: "text",
      placeholder: "https://www.myavatar.com/avatar1",
    },
  },
};
