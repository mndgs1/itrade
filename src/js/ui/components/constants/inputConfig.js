import { button, icon, message } from "../primary";

export const inputConfig = {
  name: {
    id: "name",
    label: "Username*",
    text: "",
    attributes: {
      type: "text",
      placeholder: "janesmith",
    },
  },
  email: {
    id: "email",
    label: "Email*",
    text: "Enter a valid student email address @stud.noroff.no",
    attributes: {
      type: "email",
      pattern: "^[\\w\\-.]+@(stud\\.)?noroff\\.no$",
      title: "Only Noroff student or teacher emails are valid.",
      autocomplete: "email",
      placeholder: "janesmith@stud.noroff.com",
    },
  },
  password: {
    id: "password",
    label: "Password*",
    text: "Password must contain at least 8 characters",
    attributes: {
      type: "password",
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
    label: "Search Listings",
    id: "search",
    attributes: {
      type: "text",
      placeholder: "Search...",
    },
    button: icon({
      className: "fa-solid fa-magnifying-glass fa-lg ",
      type: "submit",
      id: "searchButton",
      srText: "Click to search",
    }),
    labelHidden: true,
  },
  title: {
    id: "title",
    label: "Title",
    text: "Please create a short title that describes your item",
    attributes: {
      type: "text",
      placeholder: "E.g. Iphone 11S",
    },
  },
  description: {
    id: "description",
    label: "Description",
    attributes: {
      type: "text",
      placeholder: "A detailed description of your item...",
    },
    textarea: true,
  },
  endsAt: {
    id: "endsAt",
    label: "Ending date & time*",
    attributes: {
      type: "datetime-local",
    },
  },
  time: {
    id: "time",
    label: "Ending time*",
    attributes: {
      type: "time",
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
      type: "button",
      id: "addTag",
      clear: true,
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
      type: "button",
      id: "addMedia",
      clear: true,
      text: "Add",
    }),
  },
  bid: {
    id: "bid",
    label: "Credits",
    short: true,
    attributes: {
      type: "text",
      oninput: "this.value = this.value.replace(/[^0-9]/g, '')",
    },
    customClasses: "inline-block mr-1",
    button: message({ primary: true, text: "kr", customClasses: "mr-2" }),
    labelHidden: true,
  },
};
