import { button, icon } from "../primary";

export const inputConfig = {
  username: {
    id: "username",
    label: "Username",
    text: "",
    attributes: {
      type: "text",
      required: true,
      placeholder: "janesmith",
    },
  },
  email: {
    id: "email",
    label: "Email",
    text: "Enter a valid student email address @stud.noroff.no",
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
    label: "Password",
    text: "Password must contain at least 8 characters",
    attributes: {
      type: "password",
      required: true,
      minlength: "8",
      autocomplete: "current-password",
    },
  },
  avatar: {
    id: "avatar",
    label: "Avatar",
    text: "Please enter an avatar URL",
    attributes: {
      type: "text",
      placeholder: "https://www.myavatar.com/avatar1",
    },
  },
  search: {
    search: true,
    id: "search",
    attributes: {
      type: "text",
      placeholder: "Search...",
    },
    button: icon({
      className: "fa-solid fa-magnifying-glass fa-lg ",
      type: "submit",
      id: "searchButton",
    }),
  },
  title: {
    id: "title",
    label: "Title",
    text: "Please create a short title that describes your item",
    attributes: {
      type: "text",
      placeholder: "E.g. Iphone 11S",
      required: true,
    },
  },
  description: {
    id: "description",
    label: "Description",
    attributes: {
      type: "text",
      placeholder: "A detailed description of your item...",
      required: true,
    },
    textarea: true,
  },
  endsAt: {
    id: "auctionEndsAt",
    label: "Auction ending date",
    attributes: {
      type: "datetime-local",
      required: true,
    },
  },
  tags: {
    id: "tags",
    label: "Tags",
    attributes: {
      type: "text",
      placeholder: "Phone",
    },
    button: button({
      id: "addTag",
      outline: true,
      text: "Add",
    }),
  },
  media: {
    id: "media",
    label: "Media",
    text: "Please insert a valid link to your media file",
    attributes: {
      type: "text",
      placeholder: "https://www.phones.com/iPhone",
    },
    button: button({
      id: "addMedia",
      outline: true,
      text: "Add",
    }),
  },
};
